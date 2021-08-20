import React from 'react';

import classes from './SideBar.scss';

const SideBar = (props) => {

  return (
    <div 
    style={{
      visibility: props.sideBarVisible
    }}
    className={classes.SideBarContainer} >
      {props.children}
    </div>
  );
}

export default SideBar