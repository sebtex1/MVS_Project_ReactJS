/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const Tag = props => {
  return (
    <div>
      <TagInput>
        <Text>{props.text}</Text>
        <Number>{props.number}</Number>
      </TagInput>
    </div>
  )
}

const TagInput = styled.button`
  margin-right: 5px;
  border: none;
  border-radius: 5px;
  background-color: ${props => props.theme.tagColor};
  padding: 5px;
`

const Text = styled.span`
  margin-right: 4px;
  color: ${props => props.theme.textColor};
`

const Number = styled.span`
  color: ${props => props.theme.textColor};
`

export default Tag
