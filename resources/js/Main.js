import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import Navbar from "./components/Navbar";

const MainComp = styled.div`
    font-family: "Montserrat", "san-serif";
    background-color: #eee;
    min-height: 100vh;
`;

const Main = () => {
    return (
        <MainComp>
            <Navbar />
        </MainComp>
    );
};

export default Main;

if (document.getElementById("root")) {
    ReactDOM.render(<Main />, document.getElementById("root"));
}
