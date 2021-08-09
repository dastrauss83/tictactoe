import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import "./App.css";
import { NavBar } from "./Navbar";
import { theme } from "./Styling";
import { SignUp } from "./Auth/SignUp";

const App = () => {
  // const handleLogin = async () => {
  //   const provider = new firebase.auth.EmailAuthProvider();
  //   firebase
  //     .auth()
  //     .signInWithPopup(provider)
  //     .then((result) => {
  //       setCurrentUser(result.user);
  //     });
  // };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/log-in">
            <SignUp />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
