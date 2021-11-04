import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from '../screens/home'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                {/* <PrivateRoute exact path="/home">
                    <Home />
                </PrivateRoute> */}
                <Redirect to="/"></Redirect>
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