import React from 'react'
import styled from 'styled-components'
import Header from '../components/header'
import Navbar from './navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Header title='Games' />
      </Container>
    </div>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
`

export default Home
