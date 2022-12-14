import { Box } from "@mui/material";
import Header from "../../components/header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box >
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="70vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
