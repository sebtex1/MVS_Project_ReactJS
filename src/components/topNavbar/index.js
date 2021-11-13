import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import allTheActions from '../../actions'
import styled from 'styled-components'
import { SunFill } from '@styled-icons/bootstrap/SunFill'
import { MoonStarsFill } from '@styled-icons/bootstrap/MoonStarsFill'

const TopNavbar = () => {
  const dispatch = useDispatch()
  const theme = useSelector(state => state.theme.value)
  return (
    <Container>
      <Name>Games</Name>
      <GamePage>Liste des jeux</GamePage>
      <FavPage>Liste des favoris</FavPage>
      <Log>Connexion</Log>
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
      <Theme>FR</Theme>
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
  font-weight: ${window.location.pathname === '/' ? 'bold' : 'normal'};
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
const Theme = styled.h4`
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
