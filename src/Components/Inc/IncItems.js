import React, {Component} from 'react';
import IncItem from './IncItem/IncItem';
import styled from 'styled-components';
import {connect} from 'react-redux';
import * as actions from '../../store/action/actions';

const Income = styled.div`
    float: left;
    width: 475px;
    margin-right: 50px;
`;

const TextInc = styled.h2`
    color: #28B9B5;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 15px;
`;

class IncItems extends Component {
    render(){
        let content = null;
        if (this.props.IncList !== null) {
            content = this.props.IncList.map(data => {
                return <IncItem key={data.id} description={data.des} value={data.val} delete={() => this.props.deleteSingleItem(data.id)}/>
            });
        }
        return(
            <Income>
                <TextInc>INCOME</TextInc>
                {content}
            </Income>
        );
    }
}

const mapStateToProps = state => {
    return {
        IncList: JSON.parse(window.localStorage.getItem('IncomeList'))
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteSingleItem: (id) => dispatch(actions.deletePersonPlus(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncItems);