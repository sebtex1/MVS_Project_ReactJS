/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import allTheActions from '../actions'

import Input from '../components/input'

const Login = () => {
  const dispatch = useDispatch()
  const theme = useSelector(state => state.theme.value)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const token = localStorage.getItem('token')

  useEffect(() => {}, [username])

  useEffect(() => {
    // const interval = setInterval(() => {
    //   const token = localStorage.getItem('token')
    //   console.log('TOKEN', token)
    //   if (token != null) {
    //     history.push('/')
    //   }
    // }, 1000)
    // return () => clearInterval(interval)
  }, [])

  const onSubmit = e => {
    e.preventDefault()
    if (username.length < 3) {
      alert('Please enter big username')
      return
    }
    axios({
      method: 'POST',
      url: 'https://easy-login-api.herokuapp.com/users/login',
      data: {
        username: username,
        password: password
      }
    }).then(response => {
      console.log(response.headers['x-access-token'])
      localStorage.setItem('token', response.headers['x-access-token'])
      history.push('/')
    })
  }

  const deleteToken = () => {
    window.localStorage.setItem('token', null)
    window.location.reload(false)
  }

  return (
    <StyledContainer>
      {token != null ? (
        <StyledLayer>
          <StyledWrapper>
            <StyledH1>Logout</StyledH1>
            <StyledButtonTheme
              onClick={() =>
                dispatch(
                  allTheActions.theme.changeTheme(
                    theme === 'lightTheme' ? 'darkTheme' : 'lightTheme'
                  )
                )
              }
            >
              theme
            </StyledButtonTheme>
          </StyledWrapper>
          <StyledParagraphe>
            Tu peux ajouter en favoris😫 alors inscris toi 🤗
          </StyledParagraphe>
          <StyledButtonLogOut onClick={deleteToken}>Partir</StyledButtonLogOut>
        </StyledLayer>
      ) : (
        <StyledLayer>
          <StyledWrapper>
            <StyledH1>Login</StyledH1>
            <StyledButtonTheme
              onClick={() =>
                dispatch(
                  allTheActions.theme.changeTheme(
                    theme === 'lightTheme' ? 'darkTheme' : 'lightTheme'
                  )
                )
              }
            >
              theme
            </StyledButtonTheme>
          </StyledWrapper>
          <StyledParagraphe>
            Tu peux ajouter en favoris😫 alors inscris toi 🤗
          </StyledParagraphe>
          <StyledForm onSubmit={onSubmit}>
            <StyledLabel>Mail</StyledLabel>
            <Input
              typeInput='email'
              placeholderInput='melvin@gmail.com'
              valueInput={username}
              onChangeInput={e => setUsername(e.target.value)}
              name='username'
              required
            />
            <StyledLabel>Password</StyledLabel>
            <Input
              typeInput='password'
              valueInput={password}
              placeholderInput='....'
              name='password'
              required
              onChangeInput={e => setPassword(e.target.value)}
            />
            <StyledButton type='submit'>Je m'inscris</StyledButton>
          </StyledForm>
        </StyledLayer>
      )}
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  height: 100vh;
  padding: 0px 20px;
  @media (min-width: 968px) {
    padding: 0px 15em;
  }
  @media (min-width: 1500px) {
    padding: 0px 20px;
  }
`

const StyledLayer = styled.div`
  width: 100%;
`
const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledParagraphe = styled.div`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledLabel = styled.p`
  font-size: 18px;
  margin-top: 40px;
  align-self: baseline;
  font-weight: 600;
  @media (min-width: 968px) {
    align-self: center;
  }
`

const StyledButton = styled.button`
  width: 100%;
  height: 64px;
  border-radius: 8px;
  background: #636cc2;
  text-align: center;
  margin-top: 30px;
  font-size: 18px;
  font-weight: 700;
  color: white;
  border: none;
  @media (min-width: 968px) {
    width: 338px;
  }
`
const StyledButtonLogOut = styled.button`
  width: 90%;
  height: 64px;
  background: #c94239;
  color: white;
  font-size: 18px;
  font-weight: 700;
  border: none;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 77%);
  border-radius: 8px;
  @media (min-width: 968px) {
    width: 338px;
  }
`

const StyledButtonTheme = styled.button`
  width: 30px;
  height: 30px;
`

const StyledH1 = styled.h1`
  font-size: 48px;
`

export default Login
