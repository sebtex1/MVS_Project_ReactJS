import React, { useContext } from 'react'
import Loader from 'react-loader-spinner'
import { ThemeContext } from 'styled-components'

const LoaderComp = () => {
  const theme = useContext(ThemeContext)
  return (
    <div>
      <Loader type='Rings' color={theme.textColor} height={80} width={80} />
    </div>
  )
}

export default LoaderComp
