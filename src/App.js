import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import { UserProvider } from "./context/UserContext";
import IndexRoutes from "./routes";

const App = () => {
    return (
        <UserProvider>
            <Router>
                <Navbar />

                <IndexRoutes />
            </Router>
        </UserProvider>
    );
};

export default App;
