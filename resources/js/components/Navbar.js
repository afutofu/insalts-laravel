import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarComp = styled.nav`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    background-color: #fff;
    box-sizing: border-box;
`;

const Icon = styled.img.attrs(() => ({
    src: "https://image.freepik.com/free-icon/salt_318-127920.jpg"
}))`
    width: 25px;
    height: 25px;
    margin-right: 8px;
`;

const Title = styled.h3`
    font-size: 16px;
    margin: 0;
    color: black;
    font-weight: 400;

    a {
        color: unset;
        text-decoration: none;
    }
`;

const NavItems = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
`;

const NavItem = styled.li`
    font-size: 16px;
    margin-left: 30px;
    color: #666;
    list-style: none;
    display: flex;
`;

const Navbar = () => {
    return (
        <NavbarComp>
            <Title>
                <Link to="/">
                    <Icon />
                    Insalts
                </Link>
            </Title>

            <NavItems>
                <NavItem>Login</NavItem>
                <NavItem>Register</NavItem>
            </NavItems>
        </NavbarComp>
    );
};

export default Navbar;
