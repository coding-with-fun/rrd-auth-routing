import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/General/Home";
import CreatePost from "../pages/PrivatePages/CreatePost";
import UserProfile from "../pages/PrivatePages/UserProfile";
import Auth from "../pages/PublicPages/Auth";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const IndexRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />

            <PublicRoute exact path="/signin" component={Auth} />

            <PrivateRoute exact path="/create" component={CreatePost} />

            <PrivateRoute exact path="/profile" component={UserProfile} />
        </Switch>
    );
};

export default IndexRoutes;
