import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import allTheActions from '../actions'
import GameFavoritesDisplay from '../components/gameFavoritesDisplay'
import Navbar from './navbar'
import Header from '../components/header'
import { useTranslation } from 'react-i18next'
import Search from '../components/search'
import LoaderComp from '../components/loader'
import ErrorDisplay from '../components/errorDisplay'

const FavoritesList = () => {
  const dispatch = useDispatch()
  const listOfGames = useSelector(state =>
    state.gamesApi.value.filter(x => x.isFavorite === true)
  )

  console.log(listOfGames)
  const searchFavorite = useSelector(state => state.searchFavorite.value)
  const [filteredList, setFilteredList] = useState(null)
  const { t } = useTranslation()

  useEffect(() => {
    if (listOfGames.length === 0) {
      dispatch(
        allTheActions.gamesApi
          .callApiGamesLocal
          // 'https://store.steampowered.com/api/featured/'
          ()
      )
    }
  }, [])

  useEffect(() => {
    if (
      (listOfGames.data !== undefined || listOfGames.data !== null) &&
      searchFavorite !== ''
    ) {
      setFilteredList(
        listOfGames.filter(x =>
          x.name.toLowerCase().includes(searchFavorite.toLowerCase())
        )
      )
    } else if (
      (listOfGames.data !== undefined || listOfGames.data !== null) &&
      searchFavorite === ''
    ) {
      setFilteredList(null)
    }
  }, [searchFavorite])

  return (
    <div>
      <Navbar />
      <Container>
        <Header title={t('Favorites')} />
        <Search value='searchFavorite' placeholder={t('SearchAGame')} />
        {/* feature pour rechercher avec la value search dans le store */}
        {listOfGames.value === null && listOfGames.isError !== true ? (
          <LoaderComp />
        ) : listOfGames.isError === true ? (
          <ErrorDisplay text='Une erreur est survenue, vérifiez votre connexion ou ressayez plus tard.' />
        ) : null}
        <GamesContainer>
          {filteredList === null
            ? listOfGames?.map(game => {
                return (
                  <ContainerGame key={game.id}>
                    <GameFavoritesDisplay
                      image={game.large_capsule_image}
                      title={game.name}
                      price={`${game.final_price} ${game.currency}`}
                      tag={'test'}
                      id={game.id}
                    />
                  </ContainerGame>
                )
              })
            : filteredList.map(game => {
                return (
                  <ContainerGame key={game.id}>
                    <GameFavoritesDisplay
                      image={game.large_capsule_image}
                      title={game.name}
                      price={`${game.final_price} ${game.currency}`}
                      tag={'test'}
                      id={game.id}
                      isFavorite={false}
                    />
                  </ContainerGame>
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
  align-items: left;
  justify-content: right;
  flex-direction: column;
`

const ContainerGame = styled.div`
  margin-bottom: 10px;
`

const GamesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin-left: ${getDisplay};
  margin-top: ${getDisplay};
`

export default FavoritesList
