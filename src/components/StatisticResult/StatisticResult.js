import React from 'react';

import classes from './StatisticResult.scss';

const StatisticResult = (props) => (
  <div className={classes.ContainerResult} >
    <div className={classes.ZoneInfo} >
      <span className={classes.RealText} > {props.spanText} </span>
    </div>
    <div className={classes.ZoneButton} >
      <div className={classes.ButtonPlus} 
      style={{
        background: props.ConfBackground
      }} >
        <div className={classes.TextView}>
          <span className={classes.RealText} > Ver </span>
        </div>
        <div className={classes.LogoPlus} >
          <div className="fas fa-plus" ></div>
        </div>
      </div>
    </div>
  </div>
)
export default StatisticResult;