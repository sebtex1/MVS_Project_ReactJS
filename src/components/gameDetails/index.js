import React from 'react'
import styled from 'styled-components'
//import { PlayCircleFill } from '@styled-icons/bootstrap/PlayCircleFill'
import { ArrowBackIos } from '@styled-icons/material-rounded/ArrowBackIos'
import ReactPlayer from 'react-player/lazy'
import { useHistory } from 'react-router-dom'

const DetailVideo = () => {
  const history = useHistory()

  return (
    <div>
      <Container>
        {/* <HeaderImg src='https://wallpaperaccess.com/full/1812875.jpg' />
        <PlayYtb /> */}
        <ReactPlayer
          url='https://www.youtube.com/watch?v=zw47_q9wbBE'
          width='100%'
          height='500px'
        />
        <ButtonBack onClick={() => history.goBack()}>
          <BackArrow />
        </ButtonBack>
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
// const HeaderImg = styled.img`
//   display: block;
//   width: fit-content;
//   max-width: 100%;
// `

// const PlayYtb = styled(PlayCircleFill)`
//   position: absolute;
//   max-width: 10%;
// `
const BackArrow = styled(ArrowBackIos)`
  max-width: 50%;
`

const ButtonBack = styled.button`
  background: transparent;
  border: none !important;
  font-size: 0;
  display: none;
  @media (max-width: 750px) {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.44);
    display: block;
    height: 50px;
    width: 50px;
    border-radius: 10%;
    top: 20px;
    left: 20px;
  }
`

export default DetailVideo
