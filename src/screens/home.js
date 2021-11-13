import React from 'react'
import styled from 'styled-components'
import Header from '../components/header'

const Home = () => {
  return (
    <Container>
      <Header title='Games' />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
`

export default Home
