import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import Notes from "./pages/Notes";
import { createTheme} from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { cyan } from "@mui/material/colors";
import Layout from "./pages/Layout";

const theme=createTheme({
  palette:{
    primary:{
      main:"#f39c13"
    },
    secondary:cyan
  },
  typography:{
    fontFamily:"Big Shoulder Display",
    fontWeightLight:400,
    fontWeightRegular:500,
    fontWeightMedium:600,
    fontWeightBold:700
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Notes/>}/>
        <Route path="create" element={<Create/>}/>
      </Routes>
    </Layout>
  </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;
