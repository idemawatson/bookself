import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { BaseButton } from "@/components/parts/common/BaseButton";
import { ClientTrophy } from "@/types/ClientTrophy";

type Props = {
  newTrophies: ClientTrophy[];
  dialog: boolean;
  close: () => void;
};

const TrophyArchivedDialog: React.FC<Props> = ({
  newTrophies,
  dialog,
  close,
}) => {
  return (
    <Dialog open={dialog} onClose={close} fullWidth>
      <DialogTitle>新たにトロフィーを獲得しました！</DialogTitle>
      <DialogContent dividers>
        {newTrophies.map((trophy) => (
          <Typography key={trophy.trophy_id} variant="body1">
            {trophy.name}
          </Typography>
        ))}
      </DialogContent>
      <DialogActions>
        <BaseButton color="secondary" onClick={close}>
          OK
        </BaseButton>
      </DialogActions>
    </Dialog>
  );
};

export default TrophyArchivedDialog;
