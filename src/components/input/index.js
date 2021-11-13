import React from 'react'
import styled from "styled-components";



const Input = (props) => {
  return (
    <StyledInput
      type={props.typeInput}
      placeholder={props.placeholderInput}
      value={props.valueInput}
      onChange={props.onChangeInput}
      required='required'
      style={
        props.valueInput != ''
          ? { borderColor: 'green' }
          : { borderColor: '#7C8484' }
      }
    />
  )
}

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid;
  height: 64px;
  background: #f0f1f1;
  border-radius: 8px;
  padding-left: 6px;
  border: 4px solid;
  @media (min-width: 968px) {
    width: 524px
  }
`

export default Input;

