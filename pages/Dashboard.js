import React from 'react'
import styled from 'styled-components'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Main from './Main'


const Wrapper = styled.div`   
    display: flex;    
    height: 100vh;
    width: 100vw;
    background-color: #0a0b0d;
    color: white;
    overflow: hidden;
`

const MainContainer = styled.div`
    flex: 1;
`

const Dashboard = ({ address }) => {
    return (
        <Wrapper>
            <Sidebar />
            <MainContainer>
                <Header walletAddress={address} connectWallet={''}/>
                <Main />
            </MainContainer>
        </Wrapper>
    )
}

export default Dashboard
