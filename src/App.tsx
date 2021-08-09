import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import "./App.css";
import { NavBar } from "./Navbar";
import { theme } from "./Styling";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route></Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
