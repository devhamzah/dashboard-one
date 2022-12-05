import { Box, useTheme, InputBase, IconButton } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
// Icons Import
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";
import { MenuOutlined } from "@mui/icons-material";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);




  return (
    <Box p={2} display="flex" justifyContent="space-between">
      {/* SEARCH BAR */}
      <Box display='flex'  >
        <Box className="toggleBtn">
          <IconButton sx={{mr:"8px"}}>
            <MenuOutlined />
          </IconButton>
        </Box>

        <Box
          display="flex"
          borderRadius="3px"
          backgroundColor={colors.primary[400]}
        >
          <InputBase sx={{ ml: 2 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
      {/* ICONS BOX */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
