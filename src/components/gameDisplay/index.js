/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Tag from '../tag'
import { useHistory } from 'react-router-dom'

const GameDisplay = props => {
  const price = props.price.split(' ')[0]
  const currency = props.price.split(' ')[1]
  const history = useHistory()
  return (
    <Container>
      <Image
        src={props.image}
        onClick={() => history.push(`details/${props.id}`)}
      />
      <InfosContainer>
        <Title onClick={() => history.push(`details/${props.id}`)}>
          {props.title}
        </Title>
        <Price>
          {price.length === 1
            ? `0.0${price}`
            : price.length === 2
            ? `0.${price}`
            : price.length === 3
            ? `${price[0]}.${price[1]}${price[2]}`
            : `${price[0]}${price[1]}.${price[2]}${price[3]}`}
          {` ${currency}`}
        </Price>
        <Tag text={props.tag} />
      </InfosContainer>
    </Container>
  )
}

const getDisplay = () => {
  const display = useSelector(state => state.display.value)
  return display.width < 768 ? '150px' : '200px'
}

const Container = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
`

const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-left: 1%;
`

const Image = styled.img`
  border-radius: 8px;
  width: ${getDisplay};
`

const Title = styled.h3`
  margin-top: 10%;
  margin-bottom: 0px;
`

const Price = styled.span`
  margin-top: 10%;
  margin-bottom: 10%;
  color: ${props => props.theme.priceColor};
`

export default GameDisplay
