import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as MatchMelLogo } from "../../assets/MelissIllusion_logo.svg";
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles";
import InstagramLink from "./insta.component";
import FacebookLink from "./facebook.component";
import { useTheme } from "../../themeContext";

import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import CartIcon from "../../components/cart-icon/cart-icon.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  // console.log(currentUser);
  // eslint-disable-next-line no-unused-vars
  const { isDarkTheme, toggleTheme } = useTheme();
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <MatchMelLogo className="logo" />
        </LogoContainer>

        <NavLinks>
          {" "}
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}
          <NavLink to="./about">About</NavLink>
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <div className="social-links">
        <InstagramLink />
        <FacebookLink />
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
