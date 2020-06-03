import React from 'react';
import styled from 'styled-components';

const Exp = styled.div`
    background-color: #FF5049;
    width: 35%;
    display: flex;
    position: relative;
    left: 33%;  
    margin-top: 20px;
`;

const String = styled.p`
    text-transform: uppercase;
    color: white;
    font-family: 'PT Sans';
    margin-left: 20px;
`;

const Number = styled.p`
    color: white;
    position: relative;
    left: 55%;
    font-size: 16px;
`;

const Percentages = styled.p`
    color: white;
    text-align: center;
    position: relative;
    left: 60%;
    font-size: 16px;
    float: left;
    width: 60px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
    margin-left: 10px
`;

const totalExp = (props) => {
    return(
        <Exp>
            <String>expense</String>
            <Number>- {props.totalExp}</Number>
            <Percentages>{props.percentages === "NaN" ? null : props.percentages + ' %'}</Percentages>
        </Exp>
    );
}

export default totalExp;