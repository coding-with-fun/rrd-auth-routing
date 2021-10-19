import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
    const { isUserAuthenticated, handleSignOut } = useContext(UserContext);
    const history = useHistory();

    return (
        <div>
            <h1>Navbar</h1>

            {isUserAuthenticated ? (
                <button
                    onClick={() =>
                        handleSignOut(() => {
                            history.replace("/");
                        })
                    }
                >
                    Sign Out
                </button>
            ) : (
                <button onClick={() => history.replace("/signin")}>
                    Sign In
                </button>
            )}

            <button onClick={() => history.push("/")}>Home</button>

            <button onClick={() => history.push("/create")}>Create</button>

            <button onClick={() => history.push("/signin")}>Sign In</button>
        </div>
    );
};

export default Navbar;
