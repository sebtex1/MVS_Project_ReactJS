/* eslint-disable react/jsx-key */
import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import devices from '../config/devices'
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

import { gsap } from 'gsap'

const Home = () => {
  const dispatch = useDispatch()
  const listOfGames = useSelector(state => state.gamesApi)
  const [listOfTags, setListOfTags] = useState([])

  useEffect(() => {
    listOfGames?.value.map(game => {
      game.tags.map(tag => {
        if (listOfTags.some(x => x.name === tag.description)) {
          const index = listOfTags.findIndex(x => x.name === tag.description)
          listOfTags[index].value = listOfTags[index].value + 1
        } else {
          const newArray = [
            ...listOfTags,
            listOfTags.push({ name: tag.description, value: 1 })
          ]
          setListOfTags(newArray)
        }
      })
    })
  }, [listOfGames])

  const search = useSelector(state => state.search.value)
  const [filteredList, setFilteredList] = useState(null)
  const { t } = useTranslation()

  const boxRef = useRef()
  const layerTop = useRef()
  const layerBottom = useRef()
  const layer = useRef()

  useEffect(() => {
    if (listOfGames.value.length === 0) {
      dispatch(
        allTheActions.gamesApi
          .callApiGamesLocal
          // 'https://store.steampowered.com/api/featured/'
          ()
      )
    }
  }, [])

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      1,
      { y: -30, opacity: 1 },
      { opacity: 0, display: 'none' }
    )
    gsap.to(layerTop.current, 2, { y: '-100em', opacity: 0, delay: 1.5 })
    gsap.to(layerBottom.current, 2, { y: '100em', opacity: 0, delay: 1.5 })
    gsap.to(layer.current, 1, { display: 'none', delay: 1.5 })
  }, [])

  useEffect(() => {
    if (
      (listOfGames.data !== undefined || listOfGames.data !== null) &&
      search !== ''
    ) {
      setFilteredList(
        listOfGames.value.filter(x =>
          x.name.toLowerCase().includes(search.toLowerCase())
        )
      )
    } else if (
      (listOfGames.data !== undefined || listOfGames.data !== null) &&
      search === ''
    ) {
      setFilteredList(null)
    }
  }, [search])

  return (
    <div>
      <OverlayAnimation ref={layer}>
        <OverlayWrapperTop ref={layerTop}></OverlayWrapperTop>
        <OverlayText ref={boxRef}>GAME INSIDE</OverlayText>
        <OverlayWrapperBottom ref={layerBottom}></OverlayWrapperBottom>
      </OverlayAnimation>
      <Navbar />
      <Container>
        <Header title={t('Games')} />
        <Pictures title={t('FamousGames')} />
        <Title>{t('AllTheGames')}</Title>
        <TagsContainer>
          {listOfTags.length > 0
            ? listOfTags.map(tag => {
                return <Tag key={tag.name} text={tag.name} number={tag.value} />
              })
            : null}
        </TagsContainer>
        <Search value='search' placeholder={t('SearchAGame')} />
        {listOfGames.value === null && listOfGames.isError !== true ? (
          <LoaderComp />
        ) : listOfGames.isError === true ? (
          <ErrorDisplay text='Une erreur est survenue, vérifiez votre connexion ou ressayez plus tard.' />
        ) : null}
        <GamesContainer>
          {filteredList === null
            ? listOfGames?.value.map(game => {
                return (
                  <ContainerGame key={game.id}>
                    <GameDisplay
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
                    <GameDisplay
                      image={game.large_capsule_image}
                      title={game.name}
                      price={`${game.final_price} ${game.currency}`}
                      tag={'test'}
                      id={game.id}
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
`

const OverlayAnimation = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 99;
`

const OverlayText = styled.div`
  position: absolute;
  font-weight: bold;
  font-size: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 101;
`

const OverlayWrapperTop = styled.div`
  width: 100%;
  height: 50%;
  background black;
  position: absolute;
  top: 0;
  z-index: 100;
`

const OverlayWrapperBottom = styled.div`
  width: 100%;
  height: 50%;
  background black;
  position: absolute;
  bottom: 0;
  z-index: 100;
`

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  margin-left: 2%;
  @media ${devices.tablet} {
    margin-left: 1%;
  }
`

const GamesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  margin-left: 2%;
  margin-top: 2%;
  @media ${devices.tablet} {
    margin-left: 1%;
    margin-top: 1%;
  }
`

const Title = styled.h3`
  margin-left: 2%;
  @media ${devices.tablet} {
    margin-left: 1%;
  }
`

export default Home
