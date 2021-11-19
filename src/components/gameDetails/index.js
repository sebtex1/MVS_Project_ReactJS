import React from 'react'
import styled from 'styled-components'
import { PlayCircleFill } from '@styled-icons/bootstrap/PlayCircleFill'

const DetailVideo = () => {
  return (
    <Container>
      <PlayYtb />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  height: 50vh;
  background: url('https://wallpaperaccess.com/full/1812875.jpg');
`

const PlayYtb = styled(PlayCircleFill)`
  max-width: 50px;
`

export default DetailVideo
