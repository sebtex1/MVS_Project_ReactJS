import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import allTheActions from '../actions'
import GameFavortesDisplay from '../components/gameFavoritesDisplay'
import Navbar from './navbar'

const FavoritesList = () => {
  const dispatch = useDispatch()
  const listOfGames = useSelector(state => state.gamesApi.value)

  useEffect(() => {
    dispatch(
      allTheActions.gamesApi.callApiGames(
        'https://store.steampowered.com/api/featured/'
      )
    )
  }, [])

  return (
    <div>
      <Navbar />
      <Container>
        <h1>Favorites</h1>
        <GamesContainer>
          {listOfGames?.data?.featured_win.map(game => {
            return (
              <div key={game.id}>
                <GameFavortesDisplay
                  image={game.large_capsule_image}
                  title={game.name}
                  price={`${game.final_price} ${game.currency}`}
                  tag={'test'}
                  id={game.id}
                  suggestion={true}
                />
                <br />
              </div>
            )
          })}
        </GamesContainer>
      </Container>
    </div>
  )
}

const getDisplay = () => {
  const display = useSelector(state => state.display.value)
  return display.width < 1024 ? '5%' : '2%'
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const GamesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin-left: ${getDisplay};
  margin-top: ${getDisplay};
`
const GamesContainerChild = styled.div`
  display: flex;
  flex-direction: row;
`

export default FavoritesList
