import React, { useEffect, useRef, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";

import Checklist from "../components/Checklist";

import { pageStyle } from "../styles";
import config from "../config";

let job = JSON.parse(localStorage.getItem("job"));

if (!job) {
  job = config.job;
}

const Step = ({ classes }) => {
  const handleChange = newChecklist => {
    job.checklist = newChecklist;

    localStorage.setItem("job", JSON.stringify(job));
  };

  return (
    <div className={classes.root}>
      <Checklist list={job.checklist} onChange={handleChange} />
    </div>
  );
};

Step.propTypes = {};
Step.defaultProps = {};

export default withStyles(pageStyle)(Step);
