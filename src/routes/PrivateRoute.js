import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isUserAuthenticated: isAuthenticated } = useContext(UserContext);

    return (
        <Route
            {...rest}
            render={(props) => {
                if (isAuthenticated) {
                    return <Component />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/signin",
                                state: { from: props.location },
                            }}
                        />
                    );
                }
            }}
        />
    );
};

export default PrivateRoute;
