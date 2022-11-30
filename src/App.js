import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "./scenes/global/sidebar";
import Topbar from "./scenes/global/topbar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./scenes/dashboard";


function App() {
  const [theme,colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar/>
          <main  className="content">
           <Topbar/>
           <Box sx={{p:2}}>
            <Routes>
              <Route path="/" element={<Dashboard/>} />
            </Routes>
           </Box>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
