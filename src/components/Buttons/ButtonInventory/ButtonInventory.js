import React from 'react';

import classes from './ButtonInventory.scss';

const ButtonInventory = (props) => {
  return (
    <div className={classes.BtnNew} onClick={props.clicked} >
      <div className={classes.FrontIcon} >
        <span className='far fa-list-alt' />
      </div>
      <div className={classes.BackIcon} >
        <span className='fas fa-list-alt' />
      </div>
      <div
        className={classes.Text}
        style={{
          fontSize: props.ConfFontSize,
          marginTop: props.confMarginTop,
          marginleft: props.ConfMarginLeft
        }}
      >
        <span>Inventario físico</span>
      </div>
    </div>
  );
}

export default ButtonInventory