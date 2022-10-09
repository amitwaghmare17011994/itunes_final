import React, { useEffect } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import Cookies from "js-cookie";

import {
  createMuiTheme,
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Routes from "./Routes";
import "./styles.css";
import AuthRoutes from "./AuthRoutes";

const theme = createTheme({
  
  typography: {
    fontFamily: "Raleway, Arial",
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#d73a2c",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#0066ff",
      main: "#364671",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "white",
    },
    // error: will use the default color
  },
});
theme.typography.h6 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.2rem",
  },
  // [theme.breakpoints.down("md")]: {
  //   fontSize: "3.4rem",
  // },
};
 
export default function App() {
  const isLogedIn = Cookies.get("user");
  return (
    <>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <div
            style={{
              overflowY: "hidden",
              maxHeight: "100vh",
              backgroundColor:'#d2cfcf',
              minHeight:'100vh'
            }}
          >
            {" "}
            {isLogedIn ? <Routes /> : <AuthRoutes />}{" "}
          </div>{" "}
        </RecoilRoot>{" "}
      </ThemeProvider>{" "}
    </>
  );
}
