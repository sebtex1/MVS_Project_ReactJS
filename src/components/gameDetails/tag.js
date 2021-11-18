/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const DetailTag = props => {
  return (
    <div>
      <StyledTag>{props.tag}</StyledTag> &nbsp;
      {/* <StyledTag>{props.tag1}</StyledTag> */}
    </div>
  )
}

const StyledTag = styled.h3`
  color: ${props => props.theme.textColor};
  margin-top: 5px;
  padding-left: 5px;
  display: inline;
  padding-right: 9px;
  clear: both;
  background-color: ${props => props.theme.tagColor};
`

export default DetailTag
