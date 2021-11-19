import React, { useEffect } from 'react'
import TopNavbar from '../components/topNavbar'
import BottomNavbar from '../components/bottomNavbar'
import { useDispatch } from 'react-redux'
import allTheActions from '../actions'

const Navbar = () => {
  const dispatch = useDispatch()
  // const display = useSelector(state => state.display.value)

  function changeWindowSize() {
    dispatch(
      allTheActions.display.changeDisplay({
        width: window.innerWidth,
        height: window.innerHeight
      })
    )
  }

  useEffect(() => {
    window.addEventListener('resize', changeWindowSize)
    return () => {
      window.removeEventListener('resize', changeWindowSize)
    }
  }, [])

  return (
    <div>
      <BottomNavbar />
      <TopNavbar />
    </div>
  )
}

export default Navbar
