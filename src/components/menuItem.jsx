import { useTheme } from "@emotion/react";
import { tokens } from "../theme";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const MenuItem = ({ title, links }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{ width: 1, mt: 2 }}>
      <Typography variant="h6" color={colors.grey[300]}>
        {title}
      </Typography>
      {links.map((item) => {
        return (
          <NavLink key={item.id} to={item.to}>
            <Box display="flex" alignItems="center" sx={{ ml: 1, mt: 1,p:1}}>
              {item.icon}
              <Typography sx={{ml:2}} >{item.lable}</Typography>
            </Box>
          </NavLink>
        );
      })}
    </Box>
  );
};

export default MenuItem;
