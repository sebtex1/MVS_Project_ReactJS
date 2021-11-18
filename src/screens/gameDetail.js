import React, { useEffect } from 'react'
import axios from 'axios'
import DetailVideo from '../components/gameDetails'
import styled from 'styled-components'
import { Star } from '@styled-icons/boxicons-regular/Star'

import DetailTag from '../components/gameDetails/tag'

const GameDetails = () => {
  //const [details, setDetails] = useState({})

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://store.steampowered.com/api/appdetails/',
      params: {
        appids: 1551360
      }
    }).then(response => {
      console.log(response.data)
      //setDetails(response.data.meals[0])
    })
  }, [])

  return (
    <div>
      <DetailVideo />
      <Container>
        <ContainerChild>
          <div>
            <TitleGame>
              Forza Horizon 5 <IconStar />
            </TitleGame>
          </div>
          <StyledTitle>
            <div>
              <DetailTag />
            </div>
          </StyledTitle>
          <h2>Description</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <StyledDescription>
            <div>
              <h2>Developpers</h2>
              <p>Melvin le boss</p>
            </div>
            <div>
              <h2>Published</h2>
              <p>Melvin le boss</p>
            </div>
            <div>
              <h2>Price</h2>
              <p>69.99 €</p>
            </div>
          </StyledDescription>
        </ContainerChild>
      </Container>
    </div>
  )
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
`

const IconStar = styled(Star)`
  float: right;
  max-width: 35px;
`

export default GameDetails
