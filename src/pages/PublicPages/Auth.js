import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Auth = () => {
    const { handleSignIn } = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    const pathName = location.state?.from || {
        pathname: "/",
    };

    return (
        <div>
            <h1
                onClick={() => {
                    handleSignIn(() => {
                        history.replace(pathName);
                    });
                }}
            >
                Authentication
            </h1>
        </div>
    );
};

export default Auth;
