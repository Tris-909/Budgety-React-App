import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import ExpItem from './ExpItem/ExpItem';

const Expense = styled.div`
    float: left;
    width: 475px;
`;

const ExpText = styled.h2`
    color: #FF5049;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 15px;
`;

const ExpItems = (props) => {
    let content = props.ExpList.map(data => {
        return <ExpItem id={data.id} description={data.des} value={data.value}/>
    });
    
    return(
        <Expense>
            <ExpText>Expense</ExpText>
            {content}
        </Expense>
    );
}

const mapStateToProps = state => {
    return {
        ExpList: state.ExpList
    }
}

export default connect(mapStateToProps, null)(ExpItems)