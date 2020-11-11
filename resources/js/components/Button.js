import React from "react";
import styled from "styled-components";

const ButtonComp = styled.button`
    width: calc(100% - 40px);
    height: 45px;
    padding: 8px 0;
    text-align: center;
    background-color: ${props =>
        props.secondary ? "white" : "rgb(182, 78, 31)"};
    color: ${props => (props.secondary ? "rgb(182, 78, 31)" : "white")};
    margin: 18px 20px;
    margin-top: ${props => props.noMarginTop && "0px"};
    text-transform: uppercase;
    border: ${props =>
        props.secondary ? "1px solid rgb(182, 78, 31)" : "none"};
    outline: none;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 600;
    border-radius: 5px;

    :focus {
        outline: none;
    }
`;

const Button = props => {
    return (
        <ButtonComp secondary={props.secondary} noMarginTop={props.noMarginTop}>
            {props.children}
        </ButtonComp>
    );
};

export default Button;
