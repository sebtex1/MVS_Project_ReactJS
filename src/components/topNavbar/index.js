import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import allTheActions from '../../actions'
import styled from 'styled-components'
import devices from '../../config/devices'
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
    <ContainerTop>
      <Name>{process.env.REACT_APP_NAME}</Name>
      <ButtonPages onClick={() => history.push('/')}>
        <GamePage>{t('ListOfGames')}</GamePage>
      </ButtonPages>
      <ButtonPages onClick={() => history.push('/favoris')}>
        <FavPage>{t('ListOfFavoris')}</FavPage>
      </ButtonPages>
      <ButtonPages onClick={() => history.push('/login')}>
        <Log>{t('Login')}</Log>
      </ButtonPages>
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
    </ContainerTop>
  )
}

const ContainerTop = styled.div`
  display: none;
  justify-content: right;
  align-items: center;
  top: 0;
  background: ${props => props.theme.navbarColor};
  @media ${devices.mobile} {
    display: flex;
  }
`

// tags texts
const Name = styled.h1`
  position: absolute;
  left: 0;
  margin-left: 2%;
  color: ${props => props.theme.textColor};
`
const ButtonPages = styled.button`
  border: none;
  text-align: center;
  background: none;
  margin-right: 1%;
  margin-left: 1%;
`
const GamePage = styled.h3`
  text-align: center;
  font-weight: ${window.location.pathname === '/' ? 'bold' : 'normal'};
  color: ${props => props.theme.textColor};
`
const FavPage = styled.h3`
  text-align: center;
  font-weight: ${window.location.pathname === '/favoris' ? 'bold' : 'normal'};
  color: ${props => props.theme.textColor};
`
const Log = styled.h3`
  text-align: center;
  font-weight: normal;
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
