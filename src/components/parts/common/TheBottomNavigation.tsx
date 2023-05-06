import { MenuBook, PermIdentity, Search } from "@mui/icons-material";
import { Paper } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, FC } from "react";

const LabelBottomNavigation: FC = () => {
  const router = useRouter();
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    event.preventDefault();
    router.push(`/${newValue}`);
  };
  const pathname = usePathname();
  const [routeName, setRouteName] = useState("/games");
  useEffect(() => {
    setRouteName(pathname.split("/")[1]);
  }, [pathname]);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 1000 }}
    >
      <BottomNavigation
        sx={{ width: "100%" }}
        value={routeName}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="本棚"
          value="shelf"
          icon={<MenuBook />}
        />
        <BottomNavigationAction
          label="さがす"
          value="search"
          icon={<Search />}
        />
        <BottomNavigationAction
          label="記録"
          value="profile"
          icon={<PermIdentity />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default LabelBottomNavigation;
