import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Home from '../screens/home'
import Login from '../screens/login'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        {/* <PrivateRoute exact path="/home">
                    <Home />
                </PrivateRoute> */}
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  )
}

// function PrivateRoute({ children, ...rest }) {
//     let isToken = localStorage.getItem('token')
//     return (
//       <Route
//         {...rest}
//         render={({ location }) =>
//           isToken ? (
//             children
//           ) : (
//             <Redirect
//               to={{
//                 pathname: "/",
//                 state: { from: location }
//               }}
//             />
//           )
//         }
//       />
//     )
//   }

export default Routes
