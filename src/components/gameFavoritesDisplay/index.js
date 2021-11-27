/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import allTheActions from '../../actions'
import Tag from '../tag'
import { useHistory } from 'react-router-dom'
import { DeleteBin } from '@styled-icons/remix-line/DeleteBin'

const GameFavoritesDisplay = props => {
  const price = props.price.split(' ')[0]
  const currency = props.price.split(' ')[1]
  const history = useHistory()
  const dispatch = useDispatch()

  function handleClick() {
    props.suggestion === true
      ? history.replace(`details/${props.id}`)
      : history.push(`details/${props.id}`)
  }

  const game = Object.assign({}, props)
  console.log(game)

  return (
    <Container>
      <Image src={props.image} onClick={handleClick} />
      <InfosContainer>
        <Title onClick={handleClick}>{props.title}</Title>
        <BinContainer>
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
          <StyledBin
            onClick={() =>
              dispatch(
                allTheActions.gamesApi.setFavorites(
                  Object.assign(game, {
                    isFavorite: props.isFavorite
                  })
                )
              )
            }
          />
        </BinContainer>

        <Tag text={props.tag} />
      </InfosContainer>
    </Container>
  )
}

const getDisplay = () => {
  const display = useSelector(state => state.display.value)
  return display.width < 768 ? '150px' : '200px'
}

const StyledBin = styled(DeleteBin)`
  max-width: 25px;
  color: red;
`

const Container = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
`

const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 166px;
  margin-left: 1%;
`

const BinContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

export default GameFavoritesDisplay
