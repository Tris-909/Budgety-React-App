import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import ExpItem from './ExpItem/ExpItem';
import * as actions from '../../store/action/actions';

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
    let content = null;
    if (props.ExpList !== null) {
        content = props.ExpList.map(data => {
            return <ExpItem key={data.id} id={data.id} description={data.des} value={data.val} delete={() => props.deleteSingleItem(data.id)}/>
        });
    }
    return(
        <Expense>
            <ExpText>Expense</ExpText>
            {content}
        </Expense>
    );
}

const mapStateToProps = state => {
    return {
        ExpList: JSON.parse(window.localStorage.getItem('ExpenseList'))
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteSingleItem: (id) => dispatch(actions.deletePersonMinus(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpItems)