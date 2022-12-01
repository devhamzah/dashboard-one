import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({title,subtitle}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography sx={{m: "0px 0px 5px 0px" } } color={colors.grey[100]} fontWeight="bold" variant="h2">
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[500]} >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
