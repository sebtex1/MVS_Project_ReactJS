/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const ErrorDisplay = props => {
  return (
    <div>
      <Texte>{props.text}</Texte>
    </div>
  )
}

const getMargin = () => {
  const display = useSelector(state => state.display.value)
  return display.width < 1024 ? '5%' : '2%'
}

const Texte = styled.h3`
  margin-left: ${getMargin};
  font-weight: normal;
  font-style: italic;
  color: ${props => props.theme.subTextColor};
`

export default ErrorDisplay
