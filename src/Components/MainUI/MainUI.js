import React, {Component} from 'react';
import TotalInc from './TotalInc/TotalInc';
import TotalExp from './TotalExp/TotalExp';
import styled from 'styled-components';
import img from '../../Image/black_background.png';

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
    height: 55vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${img});
    background-size: cover;
    background-position: center;
`;

class MainUI extends Component {
    state = {
        total: 0,
        totalInc: 0,
        totalExp: 0,
        PercentageOfTotalExp: 0
    }

    render() {
        let date = new Date();
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let thisMonth =monthNames[date.getMonth()];
        let thisYear = date.getFullYear();
        return(
            <LayOut>
                <Intro>Availabel Budget in {thisMonth} {thisYear} :</Intro>
                <TotalString> {this.state.total} </TotalString>
                <TotalInc totalInc={this.state.totalInc} />
                <TotalExp totalExp={this.state.totalExp} percentages={this.state.PercentageOfTotalExp}/>
            </LayOut>
        );
    }
}

export default MainUI;