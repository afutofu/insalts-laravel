import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

import Navbar from "./components/Navbar";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";
import Home from "./pages/Home";
import Salts from "./pages/Salts";

const MainComp = styled.div`
    font-family: "Montserrat", "san-serif";
    background-color: #d5d9df;
    min-height: 100vh;
`;

const Main = () => {
    return (
        <Provider store={store}>
            <Router>
                <MainComp>
                    <Navbar />
                    <LoginModal />
                    <RegisterModal />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/salts" exact component={Salts} />
                    </Switch>
                </MainComp>
            </Router>
        </Provider>
    );
};

export default Main;

if (document.getElementById("root")) {
    ReactDOM.render(<Main />, document.getElementById("root"));
}
