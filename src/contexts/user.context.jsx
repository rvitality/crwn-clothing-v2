import React, { createContext, useContext, useEffect, useReducer } from "react";
import {
    createUserDocumentFromAuth,
    onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";

const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => {},
});

const userReducer = (state, action) => {
    const { type, payload } = action;

    if (type === "SET_USER") {
        return { ...state, currentUser: payload.user };
    }

    return {
        currentUser: null,
    };
};

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, { currentUser: null });

    const setCurrentUser = user => {
        dispatch({ type: "SET_USER", payload: { user } });
    };

    const value = { currentUser: state.currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener(user => {
            if (user) {
                createUserDocumentFromAuth(user);
            }

            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
