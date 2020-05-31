import React from 'react';
import styled from 'styled-components';

const Inc = styled.div`
    background-color: #28B9B5;
    width: 30%;
    display: flex;
    position: relative;
    left: 35%;
`;

const Text = styled.p`
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


const totalInc = (props) => {
    return(
        <Inc>
            <Text>Income</Text>
            <Number>+ {props.totalInc}</Number>
        </Inc>
    );
} 

export default totalInc;