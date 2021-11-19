/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const DetailTag = props => {
  return (
    <div>
      <StyledTag>{props.tag} </StyledTag>
    </div>
  )
}

const StyledTag = styled.h3`
  color: ${props => props.theme.textColor};
  margin-top: 5px;
  padding-left: 5px;
  padding-right: 9px;
  font-size: 12px;
  margin: 2px;
  clear: both;
  background-color: ${props => props.theme.tagColor};
`

export default DetailTag
