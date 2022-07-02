import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import SignIn from "./routes/sign-in/sign-in.components";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="shop" element={<Shop />} />
                <Route path="sign-in" element={<SignIn />} />
            </Route>
            <Route
                path="*"
                element={
                    <>
                        <p>There is nothing here!</p>
                    </>
                }
            />
        </Routes>
    );
};

export default App;
