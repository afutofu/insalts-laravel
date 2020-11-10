import React from "react";
import styled from "styled-components";

import Jumbotron from "../components/Jumbotron";
import SaltList from "../components/SaltList";

const HomeComp = styled.section`
    position: relative;
    width: 100%;
    height: 100%;
`;

const Container = styled.div`
    position: relative;
    width: 80%;
    margin: auto;
    display: flex;
`;

const Content = styled.section`
    width: 70%;
    display: flex;
    flex-direction: column;
`;

const Aside = styled.aside`
    width: 30%;
    display: flex;
    flex-direction: column;
`;

const Home = () => {
    return (
        <HomeComp>
            <Jumbotron />
            <Container>
                <Content></Content>
                <Aside>
                    <SaltList />
                </Aside>
            </Container>
        </HomeComp>
    );
};

export default Home;