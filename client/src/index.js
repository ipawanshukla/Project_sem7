import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { red, grey, blueGrey } from "@material-ui/core/colors";
import { BrowserRouter } from "react-router-dom";
const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: grey,
    bg: blueGrey,
  },
});

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
