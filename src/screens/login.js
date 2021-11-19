/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import axios from 'axios'
import { useHistory } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

import { useSelector, useDispatch } from 'react-redux'
import allTheActions from '../actions'

import { ArrowLeft } from '@styled-icons/bootstrap/ArrowLeft'

import Input from '../components/input'


const Login = () => {
  const dispatch = useDispatch()
  // const theme = useSelector(state => state.theme.value)

  const tokenAvailable = useSelector(state => state.tokenApi.token)
  const { t } = useTranslation()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isToken, setIsToken] = useState(false)
  const history = useHistory()

  const token = localStorage.getItem('token')

  useEffect(() => { }, [username])


  const submitCallBack = e => {
    e.preventDefault()
    dispatch(
      allTheActions.tokenApi.callApiToken({
        username: username,
        password: password
      })
    )
    console.log('TOKEN :', tokenAvailable.headers)
    localStorage.setItem('token', tokenAvailable.headers['x-access-token'])
    history.push('/')
  }

  const deleteToken = () => {
    window.localStorage.removeItem('token')
    history.push('/')
  }

  return (
    <StyledContainer>
      {token ? (
        <StyledLayer>
          <StyledWrapper>
            <StyledButtonTheme onClick={() => history.push('/')}>
              <ArrowLeft />
              <StyledText>Retour</StyledText>
            </StyledButtonTheme>
            <StyledH1>{t('Login')}</StyledH1>
          </StyledWrapper>
          <StyledParagraphe>{t('SentenceConnexion')}</StyledParagraphe>
          <StyledButtonLogOut onClick={deleteToken}>Partir</StyledButtonLogOut>
        </StyledLayer>
      ) : (
        <StyledLayer>
          <StyledWrapper>
            <StyledButtonTheme onClick={() => history.push('/')}>
              <ArrowLeft />
              <StyledText>Retour</StyledText>
            </StyledButtonTheme>
            <StyledH1>{t('Login')}</StyledH1>
          </StyledWrapper>
          <StyledParagraphe>{t('SentenceConnexion')}</StyledParagraphe>
          <StyledForm onSubmit={submitCallBack}>
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
  width: 100%
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

const StyledText = styled.p`
  opacity: 0
`;

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
  width: auto;
  height: auto;
  background: none;
  border: none;
  cursor: pointer;
`

const StyledH1 = styled.h1`
  font-size: 48px;
`

export default Login
