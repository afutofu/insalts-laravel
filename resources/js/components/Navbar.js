import React from "react";
import styled from "styled-components";

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

const Title = styled.h3`
    font-size: 20px;
    font-weight: 500;
    margin: 0;
`;

const NavItems = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
`;

const NavItem = styled.li`
    font-size: 16px;
    margin-left: 10px;
    color: #666;
`;

const Navbar = () => {
    return (
        <NavbarComp>
            <Title>Insalts</Title>
            <NavItems>
                <NavItem>Login</NavItem>
                <NavItem>Register</NavItem>
            </NavItems>
        </NavbarComp>
    );
};

export default Navbar;
