import Styles from "./Layout.module.css";
import Nav from "../../components/Nav/Nav";
import Aside from "../../components/Aside/Aside";
import { Outlet } from "react-router-dom";
import { useMatchMedia } from '../../hooks/myMatcMedia'
import MarketApi from '../../mobX/MarketApi'
import { useEffect } from 'react'

const Layout: React.FC = () => {

  const { isDesktop, isTablet, isMobile } = useMatchMedia()
  useEffect(() => {
    MarketApi.getData()
  }, [])
  
  return (
    <div className={Styles.layout}>
      {isDesktop && <Nav />}
      {isTablet && <Nav />}
      {isMobile && <div className={Styles.mobileMidleSection}><Outlet /></div>}
      {isTablet && <div className={Styles.tableMidleSection}><Outlet /></div>}
      {isDesktop && <div className={Styles.deskMidleSection}><Outlet /></div>}
      {isDesktop && <Aside />}
    </div>
  );
};

export default Layout;
