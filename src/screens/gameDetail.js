import React, { useEffect } from 'react'
import DetailVideo from '../components/gameDetails'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import allTheActions from '../actions'
import { Star } from '@styled-icons/boxicons-regular/Star'
import { useParams } from 'react-router-dom'
import GameDisplay from '../components/gameDisplay'
import DetailTag from '../components/gameDetails/tag'
import Navbar from './navbar'
import { useTranslation } from 'react-i18next'

const GameDetails = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const detailsGame = useSelector(state => state.gameDetails.value)
  const listOfGames = useSelector(state => state.gamesApi.value)
  const { t } = useTranslation()

  useEffect(() => {
    if (id !== undefined) {
      dispatch(
        allTheActions.gameDetails.callDetailsGame({
          url: 'https://store.steampowered.com/api/appdetails?appids=',
          id: id
        })
      )
      dispatch(
        allTheActions.gamesApi.callApiGames(
          'https://store.steampowered.com/api/featured/'
        )
      )
    }
  }, [id])

  return (
    <div>
      <Navbar />
      <DetailVideo />
      <Container>
        <ContainerChild>
          {detailsGame?.data ? (
            <div>
              <TitleGame>
                {detailsGame.data?.name} <IconStar />
              </TitleGame>
              <StyledTitle>
                {detailsGame.data?.genre?.map(item => {
                  console.log(item)
                  return (
                    <div key={item}>
                      <DetailTag />
                    </div>
                  )
                })}
              </StyledTitle>

              <h2>{t('DetailDescription')}</h2>
              <p>{detailsGame.data?.short_description}</p>
              <StyledDescription>
                <div>
                  <h2>{t('DetailDevelopper')}</h2>
                  {detailsGame.data?.developers?.map(item => {
                    return (
                      <div key={item}>
                        <p>{item}</p>
                      </div>
                    )
                  })}
                </div>
                <div>
                  <h2>{t('DetailPublished')}</h2>
                  <p>{detailsGame.data?.publishers}</p>
                </div>
                <div>
                  <h2>{t('DetailPrice')}</h2>
                  <p>{detailsGame.data?.price_overview?.final_formatted}</p>
                </div>
              </StyledDescription>
            </div>
          ) : null}
          <h2>Suggestion</h2>
          <GamesContainer>
            {listOfGames?.data?.featured_win.map(game => {
              return (
                <div key={game.id}>
                  <GameDisplay
                    image={game.large_capsule_image}
                    title={game.name}
                    price={`${game.final_price} ${game.currency}`}
                    tag={'test'}
                    id={game.id}
                  />
                  <br />
                </div>
              )
            })}
          </GamesContainer>
        </ContainerChild>
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
  align-items: center;
  justify-content: center;
`
const ContainerChild = styled.div`
  max-width: 75%;
  justify-content: center;
  align-items: center;
`
const StyledDescription = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  justify-content: space-between;
  align-items: space-between;
`

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const TitleGame = styled.h1`
  text-align: center;
  font-size: 1.5em;
`

const IconStar = styled(Star)`
  float: right;
  max-width: 25px;
`
const GamesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  margin-left: ${getDisplay};
  margin-top: ${getDisplay};
`
export default GameDetails
