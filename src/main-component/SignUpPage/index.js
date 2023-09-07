import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import {
  AppBar,
  Grid,
  Tabs,
  Tab,
  TextField,
  Button,
  Box,
  Typography,
} from "@material-ui/core";
import { toast } from "react-toastify";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CustomerRegister from './Tabs/CustomerRegister';
import GarageRegister from './Tabs/GarageRegister';
import ChannelPartnerRegister from './Tabs/ChannelPartnerRegister';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f5f5f5',
    width: '100%',
  },
}));

const SignUpPage = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const [tabvalue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setTabValue(index);
  };
  return (
    <Grid className="loginWrapper">
      <Grid className="loginForm">
      <h4 className="text-primary mb-4">Register Customer / Garage / Channel Partner</h4>

        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={tabvalue}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Customer Registration" {...a11yProps(0)} />
              <Tab label="Garage Registration" {...a11yProps(1)} />
              <Tab label="Channel Partner Registration" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={tabvalue}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={tabvalue} index={0} dir={theme.direction}>
              <CustomerRegister />
            </TabPanel>
            <TabPanel value={tabvalue} index={1} dir={theme.direction}>
              <GarageRegister />
            </TabPanel>
            <TabPanel value={tabvalue} index={2} dir={theme.direction}>
              <ChannelPartnerRegister />
            </TabPanel>
          </SwipeableViews>
        </div>
      </Grid>
    </Grid>
  );
};

export default withRouter(SignUpPage);
