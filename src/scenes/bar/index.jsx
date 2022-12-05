import { Box } from "@mui/material";
import Header from "../../components/header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box>
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="70vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
