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
// import FavPopup from '../components/popup'

const GameDetails = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const detailsGame = useSelector(
    state => state.gamesApi.value.filter(x => x.id.toString() === id)[0]
  )

  // console.log('id', id)
  console.log(detailsGame)
  const listOfGames = useSelector(state => state.gamesApi.value)
  const videoYoutube = useSelector(state => state.videoYoutube.value)
  const { t } = useTranslation()
  // const [isOpen, setIsOpen] = useState(false)
  // const token = localStorage.getItem('token')

  useEffect(() => {
    dispatch(
      allTheActions.videoYoutube.callVideoYoutube({
        query: 'Zelda BOTW',
        kind: 'TRAILER'
      })
    )
  }, [])

  useEffect(() => {
    console.log('video', videoYoutube)
  }, [videoYoutube])

  // useEffect(() => {
  //   if (id !== undefined) {
  //     dispatch(
  //       allTheActions.gameDetails.callDetailsGame({
  //         url: 'https://store.steampowered.com/api/appdetails?appids=',
  //         id: id
  //       })
  //     )
  //     dispatch(
  //       allTheActions.gamesApi.callApiGames(
  //         'https://store.steampowered.com/api/featured/'
  //       )
  //     )
  //   }
  // }, [id])

  // const showPopup = () => {
  //   if( token !== null ){
  //     setIsOpen(true)
  //   }
  // }

  return (
    <div>
      {/* {isOpen ? <FavPopup /> : null} */}
      <Navbar />
      <DetailVideo />
      <Container>
        <ContainerChild>
          {detailsGame ? (
            <div>
              <TitleGame>
                {detailsGame.name} <IconStar />
              </TitleGame>
              <StyledTitle>
                {detailsGame.tags?.map(item => {
                  return (
                    <div key={item.id}>
                      <DetailTag tag={item.description} />
                    </div>
                  )
                })}
              </StyledTitle>
              <h2>{t('DetailDescription')}</h2>
              <p>{detailsGame.short_description}</p>
              <StyledInfo>
                <div>
                  <h2>{t('DetailDevelopper')}</h2>
                  {detailsGame.developers?.map(item => {
                    return (
                      <div key={item}>
                        <p>{item}</p>
                      </div>
                    )
                  })}
                </div>
                <div>
                  <h2>{t('DetailPublished')}</h2>
                  <p>{detailsGame.publishers}</p>
                </div>
                <div>
                  <h2>{t('DetailPrice')}</h2>
                  <p>{detailsGame.price_final_formatted}</p>
                </div>
              </StyledInfo>
            </div>
          ) : null}
          <h2>{t('DetailSuggestion')}</h2>
          <GamesContainer>
            {listOfGames.map(game => {
              return (
                <div key={game.id}>
                  <GameDisplay
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
const StyledInfo = styled.div`
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
  flex-direction: row;
  justify-content: center;
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
