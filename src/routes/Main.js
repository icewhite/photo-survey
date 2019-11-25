import React, { useState, useEffect } from "react";

import { withStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";

import config from "../config";
import { pageStyle } from "../styles";
import DetailCaptureList from "../components/DetailCaptureList";

const Main = ({ classes }) => {
  let loadedJob = JSON.parse(localStorage.getItem("job"));
  console.log("Starting main");
  console.log(`loadedJob: ${JSON.stringify(loadedJob)}`);
  const [job, setJob] = useState(loadedJob || config.job);

  useEffect(() => {
    localStorage.setItem("job", JSON.stringify(job));
  }, [job]);

  const handleChange = (newDetails, i) => {
    job.details[i] = newDetails;

    setJob({ ...job });
  };

  return (
    <div className={classes.root}>
      {job.details.map((detail, i) => (
        <DetailCaptureList
          detailSet={detail}
          onChange={newDetails => handleChange(newDetails, i)}
          key={`dcl_${i}`}
        />
      ))}
    </div>
  );
};

Main.propTypes = {};
Main.defaultProps = {};

export default withStyles(pageStyle)(Main);
