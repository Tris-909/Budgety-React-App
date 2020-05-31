import React, {Component} from 'react';
import MainUI from '../Components/MainUI/MainUI';
import AddBar from '../Components/AddBar/AddBar';
// import styled from 'styled-components';

// const ListPosition = styled.div`
//     width: 1000px;
//     margin: 60px auto;
// `;

class Layout extends Component {    
    render() {
        return(
            <div>
                <MainUI />
                <AddBar />
            </div>
        );
    }
}

export default Layout;