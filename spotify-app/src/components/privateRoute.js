const { useSelector } = require("react-redux")
const { Route, Redirect } = require("react-router-dom")

const PrivateRoute = ({ children }) => {
    const loggedIn = useSelector(state => state.isLoggedInReducer)
    return (
        <Route render={() => 
            loggedIn ? (children)
            : <Redirect to={"/"} />   
        }
        />
    )
}
export default PrivateRoute;