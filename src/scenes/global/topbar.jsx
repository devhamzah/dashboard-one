import { Box, useTheme ,InputBase,IconButton, Icon} from "@mui/material";
import {  tokens } from "../../theme";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return <Box p={2} display="flex" justifyContene="space-between" >
        {/* SEARCH BAR */}
        <Box display="flex" borderRadius="3px" backgroundColor={colors.primary[400]} >
            <InputBase/>
            <IconButton>
                
            </IconButton>
        </Box>
    </Box>
}

export default Topbar;