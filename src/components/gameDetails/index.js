/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player/lazy'
import BackButton from '../backButton'

const DetailVideo = props => {
  return (
    <div>
      {props.kind === 'Trailer' ? (
        <Container>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${props.id}`}
            width='100%'
            height='500px'
            playing={props.playing}
          />
          <BackButton />
        </Container>
      ) : (
        <ContainerInvisible>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${props.id}`}
            width='100%'
            height='500px'
            playing={props.playing}
            loop={true}
            volume={0.3}
          />
          <BackButton />
        </ContainerInvisible>
      )}
    </div>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const ContainerInvisible = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

export default DetailVideo
