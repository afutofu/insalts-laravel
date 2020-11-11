import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Salts from "./pages/Salts";

const MainComp = styled.div`
    font-family: "Montserrat", "san-serif";
    background-color: #d5d9df;
    min-height: 100vh;
`;

const Main = () => {
    return (
        <Router>
            <MainComp>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/salts" exact component={Salts} />
                </Switch>
            </MainComp>
        </Router>
    );
};

export default Main;

if (document.getElementById("root")) {
    ReactDOM.render(<Main />, document.getElementById("root"));
}
