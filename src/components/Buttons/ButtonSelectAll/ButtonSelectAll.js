import React from 'react';

import classes from './ButtonSelectAll.scss';

const ButtonSelectAll = (props) => {
  return (
    <div className={classes.BtnSelecALl} >
      <div className={classes.FrontIcon} >
        <span className='far fa-check-square' />
      </div>
      <div className={classes.BackIcon} >
        <span className='far fa-square' />
      </div>
      <div className={classes.Text} >
        <span>Selec. Todo</span>
      </div>
    </div>
  );
}

export default ButtonSelectAll