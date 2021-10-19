import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PublicRoute = ({ component: Component, ...rest }) => {
    const { isUserAuthenticated: isAuthenticated } = useContext(UserContext);

    return (
        <Route
            {...rest}
            render={() => {
                if (isAuthenticated) {
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                            }}
                        />
                    );
                } else {
                    return <Component />;
                }
            }}
        />
    );
};

export default PublicRoute;
