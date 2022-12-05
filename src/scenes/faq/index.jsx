import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ExpandMoreOutlined } from "@mui/icons-material";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <Header title="FAQ" subtitle="Frequatly Asked Questions Page" />
      {/* First */}
      <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          An Important Questions
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
          eligendi dolores debitis nobis laboriosam voluptas illo earum
          laudantium nesciunt! Nam recusandae ullam rem cupiditate harum alias
          numquam quos, sit hic.
        </Typography>
      </AccordionDetails>
      </Accordion>

       {/* First */}
       <Accordion >
      <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
         This is my Questions
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
          eligendi dolores debitis nobis laboriosam voluptas illo earum
          laudantium nesciunt! Nam recusandae ullam rem cupiditate harum alias
          numquam quos, sit hic.
        </Typography>
      </AccordionDetails>
      </Accordion>
       {/* First */}
       <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          Most important Questions
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
          eligendi dolores debitis nobis laboriosam voluptas illo earum
          laudantium nesciunt! Nam recusandae ullam rem cupiditate harum alias
          numquam quos, sit hic.
        </Typography>
      </AccordionDetails>
      </Accordion>

       {/* First */}
       <Accordion defaultExpanded >
      <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          Dont talk about this Question
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
          eligendi dolores debitis nobis laboriosam voluptas illo earum
          laudantium nesciunt! Nam recusandae ullam rem cupiditate harum alias
          numquam quos, sit hic.
        </Typography>
      </AccordionDetails>
      </Accordion>

       {/* First */}
       <Accordion >
      <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          Redundant Question
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
          eligendi dolores debitis nobis laboriosam voluptas illo earum
          laudantium nesciunt! Nam recusandae ullam rem cupiditate harum alias
          numquam quos, sit hic.
        </Typography>
      </AccordionDetails>
      </Accordion>
      
    </Box>
  );
};

export default FAQ;
