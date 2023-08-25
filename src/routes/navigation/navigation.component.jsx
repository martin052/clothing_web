import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as MatchMelLogo } from '../../assets/matchmel2.svg';
import './navigation.styles.scss';
import InstagramLink from "./insta.component";
import FacebookLink from "./facebook.component";

const Navigation = () => {
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
          <Link className="nav-link" to='/sign-in'>
            Sign In
          </Link>
        </div>
              {/*Social links below*/}
              <div className="social-links">
              <InstagramLink />
              <FacebookLink /> {/* Include the FacebookLink component here */}
            </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
