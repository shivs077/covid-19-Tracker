import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  StylesProvider,
} from "@material-ui/core";
import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              INFECTED
            </Typography>
            <Typography variant="h5">{confirmed.value}</Typography>
            <Typography color="textSecondary">{lastUpdate}</Typography>
            <Typography variant="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              RECOVERED
            </Typography>
            <Typography variant="h5">{recovered.value}</Typography>
            <Typography color="textSecondary">REAL DATE</Typography>
            <Typography variant="body2">
              Number of recoveries from COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              DEATHS
            </Typography>
            <Typography variant="h5">{deaths.value}</Typography>
            <Typography color="textSecondary">REAL DATE</Typography>
            <Typography variant="body2">
              Number of deaths caused by COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
