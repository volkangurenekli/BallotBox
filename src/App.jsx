import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Add from "./pages/Add";
import NotFound from "./pages/NotFound";
import { reactLocalStorage } from "reactjs-localstorage";
import Layout from "antd/lib/layout";
import { Row, Col } from "antd";

const { Content } = Layout;

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
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <Content>
        <Row>
          <Col xs={{ span: 22, offset: 1 }} md={{ span: 20, offset: 2 }} lg={{ span: 18, offset: 3 }}>
            <Switch>
              <Route exact path="/">
                <Home candidates={candidates} set={set} />
              </Route>

              <Route exact path="/add">
                <Add candidates={candidates} set={set} />
              </Route>

              <Route component={NotFound} />
            </Switch>
          </Col>
        </Row>
      </Content>
      <Footer />
    </Layout>
  );
};

export default App;
