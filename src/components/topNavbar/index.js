import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import allTheActions from '../../actions'
import styled from 'styled-components'
import { SunFill } from '@styled-icons/bootstrap/SunFill'
import { MoonStarsFill } from '@styled-icons/bootstrap/MoonStarsFill'
import { useTranslation } from 'react-i18next'

const TopNavbar = () => {
  const dispatch = useDispatch()
  const theme = useSelector(state => state.theme.value)
  const history = useHistory()

  const { t, i18n } = useTranslation()
  const translate = val => {
    i18n.changeLanguage(val)
  }

  return (
    <Container>
      <Name>{process.env.REACT_APP_NAME}</Name>
      <GamePage>{t('ListOfGames')}</GamePage>
      <FavPage>{t('ListOfFavoris')}</FavPage>
      <Log onClick={() => history.push('/login')}>{t('Login')}</Log>
      <ButtonTheme
        onClick={() =>
          dispatch(
            allTheActions.theme.changeTheme(
              theme === 'lightTheme' ? 'darkTheme' : 'lightTheme'
            )
          )
        }
      >
        {theme === 'lightTheme' ? <MoonIcon /> : <SunIcon />}
      </ButtonTheme>
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
  justify-content: right;
  align-items: center;
  top: 0;
  background: ${props => props.theme.navbarColor};
`

// tags texts
const Name = styled.h1`
  position: absolute;
  left: 0;
  margin-left: 5%;
  color: ${props => props.theme.textColor};
`
const GamePage = styled.h3`
  right: 0;
  text-align: center;
  font-weight: ${window.location.pathname === '/' /*||
  window.location.pathname === '/details' */
    ? 'bold'
    : 'normal'};
  margin-right: 1%;
  margin-left: 1%;
  color: ${props => props.theme.textColor};
`
const FavPage = styled.h3`
  right: 0;
  text-align: center;
  font-weight: ${window.location.pathname === '/favoris' ? 'bold' : 'normal'};
  margin-right: 1%;
  margin-left: 1%;
  color: ${props => props.theme.textColor};
`
const Log = styled.h3`
  right: 0;
  text-align: center;
  font-weight: normal;
  margin-right: 1%;
  margin-left: 1%;
  color: ${props => props.theme.textColor};
`
const Theme = styled.button`
  border: none;
  background: none;
  color: ${props => props.theme.textColor};
  margin-right: 2%;
`

const ButtonTheme = styled.button`
  width: 50px;
  background: none;
  color: ${props => props.theme.themeBtnColor};
  border: none;
`

// Icons
const MoonIcon = styled(MoonStarsFill)`
  max-width: 25px;
`
const SunIcon = styled(SunFill)`
  max-width: 25px;
`

export default TopNavbar
