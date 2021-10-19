import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

    const handleSignIn = (cb) => {
        setIsUserAuthenticated(true);
        cb();
    };

    const handleSignOut = (cb) => {
        setIsUserAuthenticated(false);
        cb();
    };

    return (
        <UserContext.Provider
            value={{
                isUserAuthenticated,

                handleSignIn,
                handleSignOut,
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};
