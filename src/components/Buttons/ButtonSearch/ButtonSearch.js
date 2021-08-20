import React from "react";

import classes from "./ButtonSearch.scss";

const ButtonSearch = props => {
  return (
    <div className={classes.BtnSearch}>
      <div
        className={classes.RealSearch}
        style={{
          width: props.confWidth,
          background: props.confBackground ? props.confBackground : "#DADEE9"
        }}
      >
        <div className={classes.IconoSearch}>
          <div className={classes.RealIcon}>
            <div className="fas fa-search" />
          </div>
        </div>
        <div className={classes.TextSearch}>
          <input
            className={classes.ReaLText}
            type="text"
            placeholder="Busqueda"
          />
        </div>
      </div>
    </div>
  );
};

export default ButtonSearch;
