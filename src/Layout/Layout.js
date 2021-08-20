import React from "react";

import classes from "./Layout.scss";
import SideBar from "../components/SideBar/SideBar";
import Topbar from "../components/TopBar/TopBar";

const Layout = props => {
  return (
    <div className={classes.MainContainer}>
      <div
        style={{
          gridTemplateColumns: props.cardSize + " 1fr 3.9%"
        }}
        className={classes.AppContainer}
      >
        <div className={classes.TopBar}>
          <Topbar
            clicked={props.clickTopBar}
            topBarActiveEnt={props.topBarActiveEnt}
            topBarActivePro={props.topBarActivePro}
            topBarActiveCat={props.topBarActiveCat}
            topBarActivePur={props.topBarActivePur}
            topBarActiveSta={props.topBarActiveSta}
            topBarActiveInv={props.topBarActiveInv}
            topBarVisible={props.topBarVisible}
            origen={props.origen}
          />
        </div>
        <div className={classes.SideBar}>
          <SideBar
            sideBarVisible={props.sideBarVisible}
            
            clicked={props.clickSideProBar}
            
          >
            {props.interSide}
          </SideBar>
        </div>
        <main className={classes.Content}>{props.children}</main>
      </div>
    </div>
  );
};
export default Layout;
