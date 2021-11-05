import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import allTheActions from '../actions'

const Home = () => {
  const dispatch = useDispatch()
  const theme = useSelector(state => state.theme.value)
  // console.log('theme', theme)
  return (
    <div>
      <h1>Test</h1>
      <button
        onClick={() =>
          dispatch(
            allTheActions.theme.changeTheme(
              theme === 'lightTheme' ? 'darkTheme' : 'lightTheme'
            )
          )
        }
      >
        theme
      </button>
    </div>
  )
}

export default Home
