import React from "react";

import classes from "./ButtonCamera.scss";

const ButtonCamera = props => {
  return (
    <div className={classes.BtnCamera}>
      <div className={classes.IconCamera}>
        <span className="fas fa-camera" />
      </div>
      <div className={classes.Text}>
        <span
          style={{
            marginBottom: props.confMarginBottom,
            marginTop: props.confMarginTopText
          }}
          className={classes.RealText}
        >
          Imagen
        </span>
      </div>
    </div>
  );
};

export default ButtonCamera;
