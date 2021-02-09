import React, { Fragment, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Add from "./pages/Add";
import NotFound from "./pages/NotFound";
import { reactLocalStorage } from "reactjs-localstorage";

const App = () => {
  const [candidates, setCandidates] = useState([]);

  const get = () => {
    return reactLocalStorage.getObject("candidates");
  };

  const set = (param) => {
    reactLocalStorage.setObject("candidates", param);
    setCandidates(get());
  };

  useEffect(() => {
    setCandidates(get());
  }, []);

  return (
    <Fragment>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home candidates={candidates} set={set} />
        </Route>

        <Route exact path="/add">
          <Add candidates={candidates} set={set} />
        </Route>

        <Route component={NotFound} />
      </Switch>

      <Footer />
    </Fragment>
  );
};

export default App;
