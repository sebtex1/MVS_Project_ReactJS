/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import allTheActions from '../../actions'
import styled from 'styled-components'
import { SunFill } from '@styled-icons/bootstrap/SunFill'
import { MoonStarsFill } from '@styled-icons/bootstrap/MoonStarsFill'
import { PersonFill } from '@styled-icons/bootstrap/PersonFill'

const Header = props => {
  const dispatch = useDispatch()
  const theme = useSelector(state => state.theme.value)
  const display = useSelector(state => state.display.value)
  const history = useHistory()
  return (
    <Container>
      <Name>{props.title}</Name>
      {display.width < 768 ? (
        <div>
          <Button
            onClick={() =>
              dispatch(
                allTheActions.theme.changeTheme(
                  theme === 'lightTheme' ? 'darkTheme' : 'lightTheme'
                )
              )
            }
          >
            {theme === 'lightTheme' ? <MoonIcon /> : <SunIcon />}
          </Button>
          {window.location.pathname !== '/login' ? (
            <Button>
              <PersonIcon onClick={() => history.push('/login')} />
            </Button>
          ) : null}
        </div>
      ) : null}
    </Container>
  )
}

const getDisplay = () => {
  const display = useSelector(state => state.display.value)
  return display.width < 1024 ? '5%' : '2%'
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-top: ${getDisplay};
  margin-bottom: ${getDisplay};
`

const Name = styled.h1`
  position: absolute;
  left: 0;
  margin-left: ${getDisplay};
  color: ${props => props.theme.textColor};
`
const Button = styled.button`
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
const PersonIcon = styled(PersonFill)`
  max-width: 25px;
`

export default Header
