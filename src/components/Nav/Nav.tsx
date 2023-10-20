import Styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import { FaUserTie, FaShoppingBag } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { AiFillStar, AiTwotoneSetting } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import System from '../../mobX/system'
import {observer} from 'mobx-react-lite'

const links = [
  { to: "/", title: "Dashboard", icon: <RxDashboard /> },
  { to: "/profile", title: "Profile", icon: <FaUserTie /> },
  { to: "/mycart", title: "My Cart", icon: <FaShoppingBag /> },
  { to: "/favorite", title: "Favorite", icon: <AiFillStar /> },
  { to: "/settings", title: "Settings", icon: <AiTwotoneSetting /> },
];

const Nav: React.FC = observer(() => {
  const location = useLocation().pathname;

  return (
    <nav className={!System.isDarkTheme ? Styles.nav : `${Styles.nav} ${Styles.navDark}`}>
      <div className={Styles.logo}>
        <span>My</span>market
      </div>
      <div className={Styles.navBar}>
        <ul>
          {links.map((i) => {
            return (
              <NavLink
                to={i.to}
                key={i.title}
                className={
                  location === i.to ? Styles.activeNavLink : Styles.navLink
                }
              >
                <li>
                  <span>{i.icon}</span>
                  {i.title}
                </li>
              </NavLink>
            );
          })}
        </ul>
      </div>
    </nav>
  );
});

export default Nav;
