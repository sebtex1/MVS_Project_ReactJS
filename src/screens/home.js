import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import allTheActions from '../actions'
import { SunFill } from '@styled-icons/bootstrap/SunFill'
import { MoonStarsFill } from '@styled-icons/bootstrap/MoonStarsFill'
import { PersonFill } from '@styled-icons/bootstrap/PersonFill'

const Home = () => {
  const dispatch = useDispatch()
  const theme = useSelector(state => state.theme.value)
  const display = useSelector(state => state.display.value)
  return (
    <Container>
      <Name>Games</Name>
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
          <Button>
            <PersonIcon />
          </Button>
        </div>
      ) : null}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-top: 3%;
`

const Name = styled.h1`
  position: absolute;
  left: 0;
  margin-left: 2%;
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

export default Home
