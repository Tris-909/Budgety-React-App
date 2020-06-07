import React from 'react';
import styled, { keyframes } from 'styled-components';
import trash from '../../../Image/cross.svg';

const ContainerOfSingleItem = styled.div`
    padding: 13px;
    border-bottom: 1px solid #e7e7e7;
    height: 20px;
`;

const Description = styled.div`
    float: left;
`;

const RightContainer = styled.div`
    float: right;
    display: flex;
`;

const ItemValue = styled.div`
    color: #28B9B5;
    margin-right: 10px;
`;

const HoverDeleteAnimation = keyframes`
    0% {
        transform: translateY(5px);
    }
    50% {
        transform: translate(-5px);
    }
    100% {
        transform: traslateY(0);
    }
`;

const DeleteButton = styled.button`
    width: 20px;
    height: 20px;   
    margin-left: 10px;
    cursor: pointer;
    border: none;
    background-size: 20px 20px;
    background-color: white;
    background-image: url(${trash});
    outline: none;
    &:hover {
        animation: ${HoverDeleteAnimation} .5s ease-out;
    }
`;

const DayAndTime = styled.p`
    color: #28B9B5;
    margin-right: 20px;
    margin-top: 0px;
`;

const SingleIncItem = (props) => {
    return(
        <ContainerOfSingleItem>
            <Description>{props.description}</Description>
            <RightContainer>
            <DayAndTime>{props.time}</DayAndTime>
                <ItemValue>+ {props.value}</ItemValue>
                <DeleteButton onClick={props.delete}/>
            </RightContainer>
        </ContainerOfSingleItem>
    );
} 

export default SingleIncItem;