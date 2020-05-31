import React from 'react';
import styled from 'styled-components';

const Exp = styled.div`
    background-color: #FF5049;
    width: 30%;
    display: flex;
    position: relative;
    left: 35%;  
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
    left: 200px;
    font-size: 16px;
`;

const Percentages = styled.p`
    color: white;
    margin-left: 25px;
    position: relative;
    left: 200px;
    font-size: 16px;
`;

const totalExp = (props) => {
    return(
        <Exp>
            <String>expense</String>
            <Number>- {props.totalExp}</Number>
            <Percentages>{props.percentages} %</Percentages>
        </Exp>
    );
}

export default totalExp;