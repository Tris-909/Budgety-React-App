import React, {Component} from 'react';
import styled from 'styled-components';
import icon from '../../Image/confirm.svg';
import * as actions from '../../store/action/actions';
import {connect} from 'react-redux';

const AddBarStyled = styled.div`
    padding: 14px;
    border-bottom: 1px solid #e7e7e7;
    background-color: #f7f7f7;
`;

const OptionButton = styled.select`
    width: 55px;
    border: 1px solid #e7e7e7;
    height: 44px;
    font-size: 18px;
    color: inherit;
    background-color: #fff;
    margin-right: 10px;
    font-weight: 300;
    transition: border 0.3s;
`;

const AddDescription = styled.input`
    width: 400px;
    border: 1px solid #e7e7e7;
    background-color: #fff;
    color: inherit;
    font-family: inherit;
    font-size: 14px;
    padding: 12px 15px;
    margin-right: 10px;
    border-radius: 5px;
    transition: border 0.3s;
`;

const AddValue = styled.input`
    width: 100px;
    border: 1px solid #e7e7e7;
    background-color: #fff;
    color: inherit;
    font-family: inherit;
    font-size: 14px;
    padding: 12px 15px;
    margin-right: 10px;
    border-radius: 5px;
    transition: border 0.3s;
`;

const AddButton = styled.button`
    font-size: 35px;
    background: none;
    border: none;
    color: #28B9B5;
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    line-height: 1.1;
    margin-left: 10px;
    background-image: url(${icon});
    width: 30px;
    height: 30px;
`;

const Position = styled.div`
    margin: 0 auto;
    text-align: center;
`;

class AddBar extends Component {
    state = {
        singleItem: {
            des: '',
            val: '', 
            id: Math.random()
        },
        isPlus: true
    }
    
    onTypeChangeHandler = (event) => {
        let newDes = event.target.value;
        let newObj = {...this.state.singleItem, des: newDes}
        this.setState({
            singleItem: newObj
        });
    }
    
    onValueChangeHandler = (event) => {
        let newValue = (event.target.value);
        let newObj = {...this.state.singleItem, val: newValue}
        this.setState({
            singleItem: {...newObj}
        });
    }

    onChangePlusHandler = () => {
        this.setState({
            isPlus: !this.state.isPlus
        });
    }

    onClickHandler = (isPlus) => {
        let newItem = {...this.state.singleItem}
        if (isPlus) {
            this.props.AddPersonPlus(newItem);
        } else {
            this.props.AddPersonMinus(newItem);
        }
        let Emptyobj = {
            des: '',
            val: '',
            id: Math.random()
        }
        this.setState({
            singleItem: Emptyobj
        });
    }

    render(){
        return(
            <AddBarStyled>
                <Position>   
                    <OptionButton onChange={this.onChangePlusHandler}>
                        <option>+</option>
                        <option>-</option>
                    </OptionButton>
                    <AddDescription type="text" placeholder="Add descripttion" onChange={(event) => this.onTypeChangeHandler(event)} value={this.state.singleItem.des}/>
                    <AddValue type="number" placeholder="Value" onChange={(event) => this.onValueChangeHandler(event)} value={this.state.singleItem.val} />
                    <AddButton onClick={() => this.onClickHandler(this.state.isPlus)}/>
                </Position>
            </AddBarStyled>
        );
    }
}

const mapStateToProps = state => {
    return {
        IncList: state.IncList,
        ExpList: state.ExpList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        AddPersonPlus: (newItem) => dispatch(actions.addPersonPlus(newItem)),
        AddPersonMinus: (newItem) => dispatch(actions.addPersonMinus(newItem))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBar);
