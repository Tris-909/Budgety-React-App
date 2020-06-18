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
    outline: none;

    &:hover, &:focus {
        box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
        transform: translateY(-0.1em);
    }
`;

const Position = styled.div`
    margin: 0 auto;
    text-align: center;
`;

const ErrorMessage = styled.div`
    color: #f33131;
    font-size: 15px;
    font-family: 'PT Sans';
    font-weight: bold;
    display: inline-block;
    margin-left: 20px;

`;

interface Props {
    AddPersonPlus: Function;
    AddPersonMinus: Function;
}

class AddBar extends Component<Props> {
    state = {
        singleItem: {
            des: '',
            val: '',
            time: '', 
            id: Math.random()
        },
        isPlus: true,
        isValid: true
    }


    onTypeChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        let newDes = event.target.value;
        let newObj = {...this.state.singleItem, des: newDes}
        this.setState({
            singleItem: newObj
        });
    }
    
    onValueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
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

    onClickHandler = (isPlus: boolean) => {
        let currentDate = new Date();
        let date = currentDate.getDate();
        let month = currentDate.getMonth(); //Be careful! January is 0 not 1
        let year = currentDate.getFullYear();
        const dateString = date + "/" +(month + 1) + "/" + year;

        let newItem = {...this.state.singleItem, time: dateString.toString() }
        if (isPlus) {
            this.props.AddPersonPlus(newItem);
        } else {
            this.props.AddPersonMinus(newItem);
        }
        let Emptyobj = {
            des: '',
            val: '',
            time: '',
            id: Math.random()
        }
        this.setState({
            singleItem: Emptyobj
        });
    }

    checkValueValid = () => {
        let curValue = this.state.singleItem.val;
        let curValueArray = curValue.split('');
        let valid = true;
        for (var i = 0; i < curValueArray.length; i++) {
            let thisOne = curValueArray[i];
            if ( isNaN(parseInt(thisOne)) ) {
                valid = false;
            }
        }
        if (curValueArray.length === 0) {
            valid = false;
        }
        this.setState({
            isValid: valid
        });
        console.log(this.state.isValid);
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
                    <AddButton onClick={() => {
                        this.checkValueValid();
                        if (this.state.isValid === true && this.state.singleItem.val !== '') {
                            this.onClickHandler(this.state.isPlus);
                        }
                    }}/>
                    {this.state.isValid === false ? <ErrorMessage>Invalid Input</ErrorMessage> : null}
                </Position>
            </AddBarStyled>
        );
    }
}

interface State {
    IncList: any[];
    ExpList: any[];
}

const mapStateToProps = (state: State) => {
    return {
        IncList: state.IncList,
        ExpList: state.ExpList
    }
}

const mapDispatchToProps = (dispatch: Function ) => {
    return {
        AddPersonPlus: (newItem: object) => dispatch(actions.addPersonPlus(newItem)),
        AddPersonMinus: (newItem: object) => dispatch(actions.addPersonMinus(newItem))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBar);
