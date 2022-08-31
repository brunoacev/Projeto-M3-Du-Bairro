import { ThemeProvider } from "styled-components";
import RoutesMain from "./Routes";

function App() {
  const Theme = {
    primaryBlue: "#034AA6",
    secondaryBlue: "#2467BF",

    primaryGray: "#3B3C40",
    secondaryGray: "#304D73",

    background:"#F2F2F2",
   
    sucess: "#3FE864",
    negative: "#E83F5B",
  };

  return (
    <ThemeProvider theme={Theme}>
      <RoutesMain />
    </ThemeProvider>
  );
}

export default App;
