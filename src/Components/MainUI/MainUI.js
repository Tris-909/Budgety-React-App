import React, {Component} from 'react';
import TotalInc from './TotalInc/TotalInc';
import TotalExp from './TotalExp/TotalExp';
import styled from 'styled-components';
import img from '../../Image/black_background.png';
import {connect} from 'react-redux';

const Intro = styled.p`
    font-family: 'PT Sans';
    font-size: 18px;
    font-weight: 300;
    text-align: center;
    padding-top: 15px;
    margin-bottom: 5px;
    color: white;
`;

const TotalString = styled.p`
    font-family: 'PT Sans';
    font-size: 60px;
    font-weight: 300;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
    color: white;
`;

const LayOut = styled.div`
    height: 44vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${img});
    background-size: cover;
    background-position: center;
`;

class MainUI extends Component {
    render() {
        let date = new Date();
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let thisMonth =monthNames[date.getMonth()];
        let thisYear = date.getFullYear();
        return(
            <LayOut>
                <Intro>Availabel Budget in {thisMonth} {thisYear} :</Intro>
                <TotalString> {this.props.TotalOfIncome - this.props.TotalOfExpense} </TotalString>
                <TotalInc totalInc={this.props.TotalOfIncome} />
                <TotalExp 
                    totalExp={this.props.TotalOfExpense} 
                    percentages={((this.props.TotalOfExpense/(this.props.TotalOfIncome))*100).toFixed(2)  }   />
            </LayOut>
        );
    }
}

const mapStateToProps = state => {
    return {
        TotalOfIncome: JSON.parse(window.localStorage.getItem('IncomeTotal')),
        TotalOfExpense: JSON.parse(window.localStorage.getItem('ExpenseTotal'))
    }
}

export default connect(mapStateToProps, null)(MainUI);