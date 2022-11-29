import { Box, useTheme } from "@mui/material";
import {  tokens } from "../../theme";

const Sidebar = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return <Box backgroundColor={colors.primary[400]} className="sidebar">
    </Box>
}

export default Sidebar;