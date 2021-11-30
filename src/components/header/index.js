/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import allTheActions from '../../actions'
import styled from 'styled-components'
import devices from '../../config/devices'
import { SunFill } from '@styled-icons/bootstrap/SunFill'
import { MoonStarsFill } from '@styled-icons/bootstrap/MoonStarsFill'
import { PersonFill } from '@styled-icons/bootstrap/PersonFill'

const Header = props => {
  const dispatch = useDispatch()
  const theme = useSelector(state => state.theme.value)
  const history = useHistory()

  const token = localStorage.getItem('token')

  return (
    <Container>
      <Name>{props.title}</Name>
      <DivNav>
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
            <StyledDot
              style={{ background: token != null ? 'green' : 'red' }}
            ></StyledDot>
            <PersonIcon onClick={() => history.push('/login')} />
          </Button>
        ) : null}
      </DivNav>
    </Container>
  )
}

const DivNav = styled.div`
  display: flex;
  @media ${devices.mobile} {
    display: none;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-top: 2%;
  margin-bottom: 2%;
  @media ${devices.tablet} {
    margin-top: 1%;
    margin-left: 1%;
  }
`

const StyledDot = styled.div`
  width: 8px;
  height: 8px;
  background: #24a219;
  border: 1px solid #ffffff;
  position: absolute;
  right: 12px;
  border-radius: 50%;
`

const Name = styled.h1`
  position: absolute;
  left: 0;
  margin-left: 2%;
  color: ${props => props.theme.textColor};
  @media ${devices.tablet} {
    margin-left: 1%;
  }
`
const Button = styled.button`
  width: 50px;
  background: none;
  color: ${props => props.theme.themeBtnColor};
  border: none;
  position: relative;
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
