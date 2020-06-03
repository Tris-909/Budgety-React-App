import React, {Component} from 'react';
import IncItem from './IncItem/IncItem';
import styled from 'styled-components';
import {connect} from 'react-redux';

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
        let content = this.props.IncList.map(data => {
            return <IncItem id={data.id} description={data.des} value={data.val}/>
        });
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
        IncList: state.IncList
    }
}

export default connect(mapStateToProps, null)(IncItems);