/* eslint-disable react/prop-types */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Home from '../screens/home'
import GameDetails from '../screens/gameDetail'
import Login from '../screens/login'
import FavoritesList from '../screens/favorites'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/details/:id' component={GameDetails} />
        <PrivateRoute exact path='/favoris' component={FavoritesList} />
        {/* <PrivateRoute exact path="/home">
                    <Home />
                </PrivateRoute> */}
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  )
}

function PrivateRoute({ children, ...rest }) {
  let isToken = localStorage.getItem('token')
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isToken ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

export default Routes
