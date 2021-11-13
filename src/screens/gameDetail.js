import React, { useState, useEffect } from 'react'
import axios from 'axios'

const GameDetails = () => {
  const [details, setDetails] = useState({})

  useEffect(() => {
    axios({
      method: 'GET',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      url: 'http://store.steampowered.com/api/appdetails/',
      params: {
        appids: 1551360
      }
    }).then(response => {
      console.log(response.data)
      //setDetails(response.data.meals[0])
    })
  }, [])

  return (
    <div>
      <h1>Game Detail</h1>
    </div>
  )
}

export default GameDetails
