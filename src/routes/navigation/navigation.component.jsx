import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as MatchMelLogo } from '../../assets/MelissIllusion_logo.svg';
import './navigation.styles.scss';
import InstagramLink from "./insta.component";
import FacebookLink from "./facebook.component";
import { useTheme } from "../../themeContext";

import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import CartIcon from "../../components/cart-icon/cart-icon.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";



const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

  // console.log(currentUser);
  // eslint-disable-next-line no-unused-vars
  const { isDarkTheme, toggleTheme } = useTheme();
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <MatchMelLogo className="logo" />
        </Link>

        <div className="nav-links-container"> {/* Corrected class name */}
          <Link className="nav-link" to='/shop'>
            SHOP
          </Link>
          {
            currentUser ? (
              <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>)
              : (
                <Link className="nav-link" to='/auth'>
                  Sign In
                </Link>
            )
          }
          <Link className="nav-link" to='./about'>
            About
          </Link>
          <CartIcon />
          
        </div>
          
      {/* <button onClick={toggleTheme}>
        Toggle Theme: {isDarkTheme ? 'Dark' : 'Light'}
      </button> */}
              {/*Social links below*/}
             
            {isCartOpen && <CartDropdown />}
      </div>
      <div className="social-links">
              <InstagramLink />
              <FacebookLink /> {/* Include the FacebookLink component here */}
            </div>
      <Outlet />
    </Fragment>
    
  );
}

export default Navigation;
