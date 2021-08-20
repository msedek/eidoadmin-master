import React, { Component } from "react";
import { withRouter } from "react-router-dom"; //hack para quitar con redux

import classes from "./CatalogManager.scss";
import ButtonSwicht from "../../components/Buttons/ButtonSwicht/ButtonSwicht";

class CatalogManager extends Component {
  componentDidMount() {
    this.props.cardSize("18.2%");
    this.props.sideBarHandler("visible");
    this.props.topBarVisible("visible");
  }
  render() {
    return (
      <div className={classes.ContainerCatalog}>
        <div className={classes.Catalog1}>
          <div className={classes.Zone1}>
            <div className={classes.NameCatalog}>
              <div className={classes.RealName}>
                <span className={classes.TextReal}>Catálogo 1</span>
              </div>
            </div>
            <div className={classes.BtnSwicht}>
              <div className={classes.RealBtn}>
                <ButtonSwicht />
              </div>
            </div>
          </div>
          <div className={classes.Zone2}>
            <div className={classes.NameCatalog2}>
              <div className={classes.RealName2}>
                <span className={classes.TextReal2}>Catálogo 3</span>
              </div>
            </div>
            <div className={classes.BtnSwicht2}>
              <div className={classes.RealBtn2}>
                <ButtonSwicht />
              </div>
            </div>
          </div>
          <div className={classes.Zone3}>
            <div className={classes.NameCatalog3}>
              <div className={classes.RealName3}>
                <span className={classes.TextReal3}>Catálogo 5</span>
              </div>
            </div>
            <div className={classes.BtnSwicht3}>
              <div className={classes.RealBtn3}>
                <ButtonSwicht />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.Line} />
        <div className={classes.Catalog2}>
          <div className={classes.Zone1}>
            <div className={classes.NameCatalog}>
              <div className={classes.RealName}>
                <span className={classes.TextReal}>Catálogo 2</span>
              </div>
            </div>
            <div className={classes.BtnSwicht}>
              <div className={classes.RealBtn}>
                <ButtonSwicht />
              </div>
            </div>
          </div>
          <div className={classes.Zone2}>
            <div className={classes.NameCatalog2}>
              <div className={classes.RealName2}>
                <span className={classes.TextReal2}>Catálogo 4</span>
              </div>
            </div>
            <div className={classes.BtnSwicht2}>
              <div className={classes.RealBtn2}>
                <ButtonSwicht />
              </div>
            </div>
          </div>
          <div className={classes.Zone3}>
            <div className={classes.NameCatalog3}>
              <div className={classes.RealName3}>
                <span className={classes.TextReal3}>Catálogo 6</span>
              </div>
            </div>
            <div className={classes.BtnSwicht3}>
              <div className={classes.RealBtn3}>
                <ButtonSwicht />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(CatalogManager);
