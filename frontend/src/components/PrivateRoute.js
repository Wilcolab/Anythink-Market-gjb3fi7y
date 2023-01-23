import React from "react";
import {Route, Redirect} from "react-router-dom";

const PrivateRoute = ({component: Component, ...rest})=>{
    let currentUser = true;
    return(
        <Route 
            {...rest}
            render={props=>
                currentUser ? (
                    <Component {...props} />
                ):
                (
                    <Redirect to={{pathname: "/login"}}/>
                )
            }
        />
    )
}

export default PrivateRoute;