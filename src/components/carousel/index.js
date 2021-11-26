/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import allTheActions from '../../actions'
import Carousel from 'react-grid-carousel'
import styled from 'styled-components'
import LoaderComp from '../loader'
import ErrorDisplay from '../errorDisplay'

const Pictures = props => {
  const dispatch = useDispatch()
  const listGames = useSelector(state => state.famousGames)
  const history = useHistory()
  // console.log('list for carousel', listGames)

  useEffect(() => {
    if (listGames.value.length === 0) {
      dispatch(
        allTheActions.famousGames
          .callFamousGamesLocal
          // 'https://store.steampowered.com/api/featuredcategories/?cc=EE&amp;l=english&v=1&trailer=1%20HTTP/1.1%22%20%22-%22%20%22Valve/Steam%20HTTP%20Client%201.0%20(tenfoot)'
          ()
      )
    }
  }, [])

  return (
    <div>
      <Title>{props.title}</Title>
      {listGames.value === null && listGames.isError !== true ? (
        <LoaderComp />
      ) : listGames.isError === true ? (
        <ErrorDisplay text='Une erreur est survenue, vérifiez votre connexion ou ressayez plus tard.' />
      ) : null}
      <Carousel cols={5} rows={1} gap={'20px'}>
        {listGames?.value.map(item => {
          return (
            <Carousel.Item key={item.id}>
              <Image
                onClick={() => history.push(`/details/${item.id}`)}
                src={item.large_capsule_image}
              />
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}

const getDisplay = () => {
  const display = useSelector(state => state.display.value)
  return display.width < 1024 ? '5%' : '2%'
}

const Title = styled.h3`
  margin-left: ${getDisplay};
`

const Image = styled.img`
  border-radius: 8px;
  width: 100%;
`

export default Pictures
