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

interface Props {
    IncList: any[];
    deleteSingleItem: Function;
}

class IncItems extends Component<Props> {
    render(){
        let content = null;
        if (this.props.IncList !== null) {
            content = this.props.IncList.map(data => {
                return <IncItem key={data.id} id={data.id} time={data.time} description={data.des} value={data.val} delete={() => this.props.deleteSingleItem(data.id)}/>
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

interface State {
    IncList: any[];
}

const mapStateToProps = (state: State) => {
    return {
        IncList: state.IncList
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        deleteSingleItem: (id: number) => dispatch(actions.deletePersonPlus(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncItems);