import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import BaseConfirmationDialog from "@/components/parts/common/BaseConfirmationDialog";
import { useReward } from "react-rewards";
import { useEffect } from "react";
import { BaseButton } from "../common/BaseButton";

type Props = {
  dialog: boolean;
  close: () => void;
  level: number | null;
};

const UserLevelUpDialog: React.FC<Props> = ({ dialog, close, level }) => {
  const { reward } = useReward("alert-dialog-title", "balloons", {
    angle: 45,
    lifetime: 1200,
    zIndex: 2000,
  });

  useEffect(() => {
    if (dialog) {
      reward();
    }
  }, [reward, dialog]);

  return (
    <div id="alert-dialog-title">
      <Dialog open={dialog} onClose={close} fullWidth>
        <DialogTitle>おめでとうございます</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            <span>
              あなたのレベルは
              <Typography
                component="span"
                sx={{ color: "primary.main", fontSize: "2rem", px: 1 }}
              >
                {level}
              </Typography>
              です
            </span>
          </Typography>
        </DialogContent>
        <DialogActions>
          <BaseButton color="primary" onClick={close}>
            OK
          </BaseButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserLevelUpDialog;
