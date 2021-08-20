import React from 'react';

import classes from './ButtonSlider.scss';

const ButtonSlider = (props) => {
  return (
    <div className={classes.ContainerSlider} >
      <div className={classes.Headboard} >
        <div className={classes.LeftArrow} >
          <span className='fas fa-chevron-circle-left' ></span>
        </div>
        <div
          className={classes.Text} >
          <span
            className={classes.RealText} >
            {props.spanText}
          </span>
        </div>
        <div className={classes.RightArrow} >
          <span className='fas fa-chevron-circle-right' ></span>
        </div>
      </div>
    </div>
  );
}

export default ButtonSlider