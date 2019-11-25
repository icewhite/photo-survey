import React, { useState } from "react";

import { withStyles } from "@material-ui/core/styles";
import { Typography, TextField } from "@material-ui/core";

const styles = ({ breakpoints }) => ({
  root: {},
  form: {
    "margin-bottom": "30px"
  },
  textField: {
    "margin-top": "15px"
  }
});

const DetailCaptureList = ({ classes, detailSet, onChange }) => {
  const [deets, setDeets] = useState(detailSet);

  const handleChange = (value, i) => {
    detailSet.fields[i].value = value;

    setDeets({ ...detailSet });
    onChange(detailSet);
  };

  return (
    <div className={classes.root}>
      <Typography weight={"bold"} variant={"h4"} gutterBottom>
        {detailSet.title}
      </Typography>

      <form className={classes.form} noValidate autoComplete="off">
        {deets.fields.map((detail, i) => {
          console.log("Redo");
          return (
            <div className={classes.detailCapture}>
              <TextField
                className={classes.textField}
                key={`field_${detailSet.title}_${i}`}
                variant="outlined"
                fullWidth
                onChange={event => handleChange(event.target.value, i)}
                {...detail}
              />
            </div>
          );
        })}
      </form>
    </div>
  );
};

DetailCaptureList.propTypes = {};
DetailCaptureList.defaultProps = {};

export default withStyles(styles)(DetailCaptureList);
