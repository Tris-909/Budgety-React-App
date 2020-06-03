import React from 'react';
import styled from 'styled-components';
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

const DeleteButton = styled.button`
    width: 20px;
    height: 20px;   
    margin-left: 10px;
    cursor: pointer;
    border: none;
    background-size: 20px 20px;
    background-color: white;
    background-image: url(${trash});
`;


const SingleIncItem = (props) => {
    return(
        <ContainerOfSingleItem key={props.id}>
            <Description>{props.description}</Description>
            <RightContainer>
                <ItemValue>+ {props.value}</ItemValue>
                <DeleteButton />
            </RightContainer>
        </ContainerOfSingleItem>
    );
} 

export default SingleIncItem;