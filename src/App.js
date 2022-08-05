import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Authentication from "./routes/authentication/authentication.component";
import Checkout from "./routes/checkout/checkout.component";

import { checkUserSession } from "./store/user/user.action";

// currying

// const addNum = num1 => {
//     return num2 => num1 + num2;
// };

// const addFive = addNum(5);
// const addTen = addNum(10);

// console.log(addFive(10));
// console.log(addTen(50));

// const addTo80 = num => num + 80;

// const cache = {};
// const memoizeAddTo80 = num => {
//     if (cache.hasOwnProperty(num)) {
//         return cache[num];
//     } else {
//         cache[num] = num + 80;
//     }

//     return cache[num];
// };

// console.log(memoizeAddTo80(10));
// console.log(memoizeAddTo80(35));
// console.log(memoizeAddTo80(35));
// console.log(memoizeAddTo80(35));
// console.log(cache);

const App = () => {
    const dispatch = useDispatch();

    // ! RECOMMENDED WAY BY FIREBASE
    // useEffect(() => {
    //     const unsubscribe = onAuthStateChangedListener(user => {
    //         if (user) {
    //             createUserDocumentFromAuth(user);
    //         }

    //         dispatch(setCurrentUser(user));
    //         // setCurrentUser(user) returns -> {type: "SET_CURRENT_USER", payload: {user}}
    //         // same as above
    //         // dispatch({type: "SET_CURRENT_USER", payload: {user}});
    //     });

    //     return unsubscribe;
    // }, [dispatch]);

    useEffect(() => {
        dispatch(checkUserSession());
    }, [dispatch]);

    return (
        <>
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path="shop/*" element={<Shop />} />
                    <Route path="auth" element={<Authentication />} />
                    <Route path="checkout" element={<Checkout />} />
                </Route>
                <Route
                    path="*"
                    element={
                        <>
                            <Navigation />
                            <p>There is nothing here!</p>
                        </>
                    }
                />
            </Routes>
        </>
    );
};

export default App;
