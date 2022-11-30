import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import userImgae from "../../assets/userImage.png";
import MenuItem from "../../components/menuItem";
import { menuData } from "../../data/munuData";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return <Box sx={{p:3}} backgroundColor={colors.primary[400]} className="sidebar">
    {/*  SHRINKER SIDEBAR */}
    <Box ></Box>
    {/* USER IMAGE AND NAME */}
    <Box width="200px" sx={{ml:0}} >

    <Box marginTop="20px" display="flex" justifyContent="center" alignItems="center" >
        <img className="userimage" src={userImgae} alt="user-profile" width="100px" height="100px" />
    </Box>
    <Box textAlign="center">
        <Typography fontWeight="bold"  sx={{m:"5px 0px"}} color={colors.grey[100]} variant="h3" >Hamza Ali</Typography>
        <Typography color={colors.greenAccent[500]} variant="h5" >Simple Admin Dashboard</Typography>
    </Box>
    </Box>
    {/* MENU */}
    <Box>
        {menuData.map((item)=> {
          return <MenuItem key={item.id} {...item} />
        })}
    </Box>
  </Box>;
};

export default Sidebar;
