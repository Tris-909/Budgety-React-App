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

interface Props {
    ExpList: any[];
    deleteSingleItem: Function;
}

const ExpItems: React.FC<Props> = (props) => {
    let content = null;
    if (props.ExpList.length !== 0) {
        content = (props.ExpList).map( (data) => { 
            return <ExpItem 
                key={data.id} 
                time={data.time} 
                id={data.id} 
                description={data.des} 
                value={data.val} 
                delete={() => props.deleteSingleItem(data.id)}/>
        });
    }
    return(
        <Expense>
            <ExpText>Expense</ExpText>
            {content}
        </Expense>
    );
}

interface State {
    ExpList: any[];
}

const mapStateToProps = (state: State) => {
    return {
        ExpList: state.ExpList
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        deleteSingleItem: (id: number) => dispatch(actions.deletePersonMinus(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpItems)