import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";
import styles from "../../assets/jss/material-kit-react/views/landingPage.js";
import AddProductSection from "./Sections/AddProductSection.js";
import { ToastContainer } from "react-toastify";


// Sections for this page


const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function AdminPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  

  return (
    <div>
      <ToastContainer />
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="MITCH'S PROJECTS"
        rightLinks={<HeaderLinks username={props.username} history={props.history} />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image="https://www.teahub.io/photos/full/133-1338303_best-52-web-development-wallpaper-on-hipwallpaper-spider.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Add Project</h1>
              
              <br />
              <Button
                color="info"
                size=""
                href="/admin"
                rel="noopener noreferrer"
              >
                Back
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <AddProductSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
