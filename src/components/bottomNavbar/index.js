/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import devices from '../../config/devices'
import { Search } from '@styled-icons/feather/Search'
import { SearchOutline } from '@styled-icons/evaicons-outline/SearchOutline'
import { Heart } from '@styled-icons/bootstrap/Heart'
import { HeartFill } from '@styled-icons/bootstrap/HeartFill'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'

const BottomNavbar = () => {
  const { i18n } = useTranslation()
  const history = useHistory()
  const translate = val => {
    i18n.changeLanguage(val)
  }
  return (
    <Container>
      <ButtonIcon onClick={() => history.push('/')}>
        {window.location.pathname === '/' ? (
          <SearchOutlineIcon />
        ) : (
          <SearchIcon />
        )}
      </ButtonIcon>
      <ButtonIcon onClick={() => history.push('/favoris')}>
        {window.location.pathname === '/favoris' ? (
          <HeartFillIcon />
        ) : (
          <HeartIcon />
        )}
      </ButtonIcon>
      {i18n.language === 'en-US' ? (
        <Theme onClick={() => translate('fr-FR')}>
          <h3>EN</h3>
        </Theme>
      ) : (
        <Theme onClick={() => translate('en-US')}>
          <h3>FR</h3>
        </Theme>
      )}
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
  @media ${devices.tablet} {
    display: none;
  }
  @media ${devices.laptop} {
    display: none;
  }
`

const ButtonIcon = styled.button`
  flex: 1;
  background: none;
  color: ${props => props.theme.themeBtnColor};
  border: none;
`

// const Theme = styled.h4`
//   flex: 1;
//   text-align: center;
// `

const Theme = styled.button`
  border: none;
  background: none;
  color: ${props => props.theme.textColor};
  margin-right: 2%;
  flex: 1;
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
