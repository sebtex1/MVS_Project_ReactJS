/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { Search } from '@styled-icons/feather/Search'
import { SearchOutline } from '@styled-icons/evaicons-outline/SearchOutline'
import { Heart } from '@styled-icons/bootstrap/Heart'
import { HeartFill } from '@styled-icons/bootstrap/HeartFill'

const BottomNavbar = () => {
  return (
    <Container>
      <ButtonIcon onClick={() => console.log()}>
        {window.location.pathname === '/' ? (
          <SearchOutlineIcon />
        ) : (
          <SearchIcon />
        )}
      </ButtonIcon>
      <ButtonIcon>
        {window.location.pathname === '/favoris' ? (
          <HeartFillIcon />
        ) : (
          <HeartIcon />
        )}
      </ButtonIcon>
      <Theme>FR</Theme>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 100%;
  background-color: ${props => props.theme.navbarColor};
`

const ButtonIcon = styled.button`
  flex: 1;
  background: none;
  color: ${props => props.theme.themeBtnColor};
  border: none;
`

const Theme = styled.h4`
  flex: 1;
  text-align: center;
`

// Icons
const SearchIcon = styled(Search)`
  // Search
  max-width: 25px;
`
const SearchOutlineIcon = styled(SearchOutline)`
  max-width: 25px;
`
const HeartIcon = styled(Heart)`
  // Fav
  max-width: 25px;
`
const HeartFillIcon = styled(HeartFill)`
  max-width: 25px;
`

export default BottomNavbar
