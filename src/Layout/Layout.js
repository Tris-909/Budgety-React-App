import React, {Component} from 'react';
import MainUI from '../Components/MainUI/MainUI';
import AddBar from '../Components/AddBar/AddBar';
import styled from 'styled-components';
import IncItems from '../Components/Inc/IncItems';
import ExpItems from '../Components/Exp/ExpItems';

const ListPosition = styled.div`
    width: 1000px;
    margin: 60px auto;
`;

class Layout extends Component {    
    render() {
        return(
            <div>
                <MainUI />
                <AddBar />
                <ListPosition>
                    <IncItems />
                    <ExpItems />
                </ListPosition>
            </div>
        );
    }
}

export default Layout;