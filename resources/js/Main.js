import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const MainComp = styled.div`
    font-family: "Montserrat", "san-serif";
    background-color: #d5d9df;
    min-height: 100vh;
`;

const Main = () => {
    return (
        <MainComp>
            <Navbar />
            <Home />
        </MainComp>
    );
};

export default Main;

if (document.getElementById("root")) {
    ReactDOM.render(<Main />, document.getElementById("root"));
}
