import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { useUserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
    const { currentUser } = useUserContext();

    const signOutUserHandler = async () => {
        await signOutUser();
    };

    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrownLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        Shop
                    </Link>
                    <Link className="nav-link" to="/contact">
                        Contact
                    </Link>
                    {currentUser ? (
                        <span className="nav-link" onClick={signOutUserHandler}>
                            Sign Out
                        </span>
                    ) : (
                        <Link className="nav-link" to="/sign-in">
                            Sign In
                        </Link>
                    )}
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Navigation;
