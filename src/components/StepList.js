import React, { useEffect, useRef, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";

const StepList = ({ data }) => {
  return data.map(step => <Typography>{step.desc}</Typography>);
};

export default StepList;
