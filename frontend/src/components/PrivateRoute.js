import {Route, Redirect} from "react-router-dom";
import React from "react";

const PrivateRoute = ({component: Component, currentUser, ...rest})=>{
    return (<Route
        {...rest} render={props => (
            currentUser ? <Component {...props} /> : <Redirect to="/login" />
        )} 
    />)
}

export default PrivateRoute;