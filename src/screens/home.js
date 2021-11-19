import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import allTheActions from '../actions'
import Header from '../components/header'
import Navbar from './navbar'
import Pictures from '../components/carousel'
import Tag from '../components/tag'
import Search from '../components/search'
import GameDisplay from '../components/gameDisplay'
import LoaderComp from '../components/loader'
import ErrorDisplay from '../components/errorDisplay'

const Home = () => {
  const dispatch = useDispatch()
  const listOfGames = useSelector(state => state.gamesApi)
  const { t } = useTranslation()

  useEffect(() => {
    if (listOfGames.data === null) {
      dispatch(
        allTheActions.gamesApi.callApiGames(
          'https://store.steampowered.com/api/featured/'
        )
      )
    }
  }, [])

  return (
    <div>
      <Navbar />
      <Container>
        <Header title={t('Games')} />
        <Pictures title={t('FamousGames')} />
        <Title>{t('AllTheGames')}</Title>
        <TagsContainer>
          <Tag text='Adventure' number='112' />
          <Tag text='Action' number='87' />
          <Tag text='Course' number='87' />
        </TagsContainer>
        <Search value='search' placeholder={t('SearchAGame')} />
        {/* feature pour rechercher avec la value search dans le store */}
        {listOfGames.value === null && listOfGames.isError !== true ? (
          <LoaderComp />
        ) : listOfGames.isError === true ? (
          <ErrorDisplay text='Une erreur est survenue' />
        ) : null}
        <GamesContainer>
          {listOfGames?.value?.data?.featured_win.map(game => {
            return (
              <div key={game.id}>
                <GameDisplay
                  image={game.large_capsule_image}
                  title={game.name}
                  price={`${game.final_price} ${game.currency}`}
                  tag={'test'}
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
  align-items: left;
  justify-content: right;
  flex-direction: column;
`

const TagsContainer = styled.div`
  display: flex;
  justify-content: left;
  margin-left: ${getDisplay};
`

const GamesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  margin-left: ${getDisplay};
  margin-top: ${getDisplay};
`

const Title = styled.h3`
  margin-left: ${getDisplay};
`

export default Home
