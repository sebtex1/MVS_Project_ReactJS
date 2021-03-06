import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import devices from '../config/devices'
import { useSelector, useDispatch } from 'react-redux'
import allTheActions from '../actions'
import GameFavoritesDisplay from '../components/gameFavoritesDisplay'
import Navbar from './navbar'
import Header from '../components/header'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import Search from '../components/search'
import LoaderComp from '../components/loader'
import ErrorDisplay from '../components/errorDisplay'

const FavoritesList = () => {
  const dispatch = useDispatch()
  const listOfGames = useSelector(state =>
    state.gamesApi.value.filter(x => x.isFavorite === true)
  )

  const searchFavorite = useSelector(state => state.searchFavorite.value)
  const [filteredList, setFilteredList] = useState(null)
  const { t } = useTranslation()

  const history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      history.push('/favoris')
    } else {
      history.push('/login')
    }
  }, [])

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
          <ErrorDisplay text='Une erreur est survenue, v??rifiez votre connexion ou ressayez plus tard.' />
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

const Container = styled.div`
  display: flex;
  align-items: left;
  justify-content: right;
  flex-direction: column;
`

const ContainerGame = styled.div`
  margin-bottom: 10px;
  padding: 1%;
`

const GamesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin-left: 2%;
  margin-top: 2%;
  @media ${devices.tablet} {
    margin-left: 1%;
    margin-top: 1%;
  }
`

export default FavoritesList
