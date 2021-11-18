/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import allTheActions from '../../actions'
import { Clear } from '@styled-icons/material/Clear'

const Search = props => {
  const dispatch = useDispatch()
  const search = useSelector(state => state[props.value].value)
  return (
    <Container>
      {/* <SearchIcon /> */}
      <Input
        placeholder={props.placeholder}
        value={search}
        onChange={event =>
          dispatch(allTheActions[props.value].changeSearch(event.target.value))
        }
      />
      {search.length > 0 ? (
        <ClearButton
          onClick={() => dispatch(allTheActions[props.value].changeSearch(''))}
        >
          <ClearIcon />
        </ClearButton>
      ) : null}
    </Container>
  )
}

const getMargin = () => {
  const display = useSelector(state => state.display.value)
  return display.width < 1024 ? '5%' : '2%'
}

const getDisplay = () => {
  const display = useSelector(state => state.display.value)
  return display.width < 768 ? '80%' : '30%'
}

const Container = styled.div`
  display: flex;
`

const Input = styled.input`
  padding: 10px;
  margin-top: ${getMargin};
  margin-left: ${getMargin};
  width: ${getDisplay};
  color: ${props => props.theme.textColor};
  border: none;
  border-radius: 5px;
  background-color: ${props => props.theme.navbarColor};
  &::placeholder {
    color: ${props => props.theme.textColor};
  }
`

const ClearButton = styled.button`
  border: none;
  width: 35px;
  border-radius: 50%;
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.navbarColor};
  margin-top: ${getMargin};
  margin-left: 10px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`

const ClearIcon = styled(Clear)`
  width: 20px;
`

export default Search
