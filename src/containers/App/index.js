import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer, Flip } from "react-toastify";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import "themes/css/App.css";
import "themes/scss/main.scss";
import "GlobalStyle.scss";
import Portfolio from "containers/App/screens/Portfolio";
import Resume from "containers/App/screens/Resume";
import ResumeReview from "containers/App/screens/ResumeReview";
import Modals from "containers/Modals/Injectable";
// import { withMainLayout } from "components/Layouts";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/resume-review" component={ResumeReview} />
        <Redirect to="/" />
      </Switch>
      <ToastContainer
        className="ncp-toast"
        transition={Flip}
        hideProgressBar
        autoClose={2000}
      />
      <Modals />
    </>
  );
}

export default App;
