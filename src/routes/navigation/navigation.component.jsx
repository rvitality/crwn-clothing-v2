import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectCartIsOpen } from "../../store/cart/cart.selector";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { NavigationContainer, Logo, NavLinks, NavLink } from "./navigation.styles.jsx";

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectCartIsOpen);

    const signOutUserHandler = async () => {
        await signOutUser();
    };

    return (
        <>
            <NavigationContainer>
                <Logo className="logo-container" to="/">
                    <CrownLogo className="logo" />
                </Logo>
                <NavLinks className="nav-links-container">
                    <NavLink className="nav-link" to="/shop">
                        Shop
                    </NavLink>
                    <NavLink className="nav-link" to="/contact">
                        Contact
                    </NavLink>
                    {currentUser ? (
                        <NavLink as="span" className="nav-link" onClick={signOutUserHandler}>
                            Sign Out
                        </NavLink>
                    ) : (
                        <NavLink className="nav-link" to="/auth">
                            Sign In
                        </NavLink>
                    )}
                    <CartIcon />
                </NavLinks>

                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </>
    );
};

export default Navigation;
