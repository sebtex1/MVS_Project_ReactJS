import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player/lazy'
import BackButton from '../backButton'

const DetailVideo = () => {
  return (
    <div>
      <Container>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=zw47_q9wbBE'
          width='100%'
          height='500px'
        />
        <BackButton />
      </Container>
    </div>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

export default DetailVideo
