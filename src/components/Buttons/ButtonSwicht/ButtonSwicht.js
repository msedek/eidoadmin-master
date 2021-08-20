import React from 'react';

import classes from './ButtonSwicht.scss';

const ButtonSwicht = (props) => {

  return (
    <div className={classes.BtnSwicht} >
    <div className={classes.RealSwitch} >
      <div className={classes.Bswitch}>
        <span className={classes.Cbig} />
        <span className={classes.Mid} />
        <span className={classes.Csmall} />
      </div>
    </div>
  </div>
  );
};

export default ButtonSwicht