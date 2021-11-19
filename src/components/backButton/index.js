import React from 'react'
import styled from 'styled-components'
import { ArrowBackIos } from '@styled-icons/material-rounded/ArrowBackIos'
import { useHistory } from 'react-router-dom'

const BackButton = () => {
  const history = useHistory()
  return (
    <div>
      <ButtonBack onClick={() => history.goBack()}>
        &nbsp;&nbsp;&nbsp;
        <BackArrow />
      </ButtonBack>
    </div>
  )
}

const BackArrow = styled(ArrowBackIos)`
  max-width: 25px;
`

const ButtonBack = styled.button`
  background: transparent;
  border: none !important;
  display: none;
  @media (max-width: 750px) {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.44);
    display: flex;
    height: 50px;
    width: 50px;
    border-radius: 10%;
    top: 20px;
    left: 20px;
    justify-content: center;
    align-items: center;
  }
`

export default BackButton
