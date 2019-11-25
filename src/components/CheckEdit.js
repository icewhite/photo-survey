import React, { useState, forwardRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  TextField,
  Grid
} from "@material-ui/core";
import {
  Close as CloseIcon,
  CheckCircle as CheckIcon,
  Cancel as CrossIcon,
  Save as SaveIcon
} from "@material-ui/icons";

import Camera from "./Camera";

const useStyles = makeStyles(theme => ({
  root: {},
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  textField: {
    "margin-top": "15px"
  },
  dialogBody: {
    flexGrow: 1,
    padding: 16,
    [theme.breakpoints.up("sm")]: {
      padding: 24,
      maxWidth: 500,
      margin: "auto"
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: 900
    }
  }
}));
const CheckEdit = ({ check, onClose, onSave }) => {
  const classes = useStyles();

  const [status, setStatus] = useState(check.fields.status);
  const [comment, setComment] = useState(check.fields.comment);

  const handleStatusChange = status => {
    setStatus(status);
  };

  const handleSave = () => {
    check.fields.comment = comment;
    check.fields.status = status;
    onSave(check);
  };

  const enableSave = () => {
    if (status === "Pass") {
      return true;
    } else if (status === "Fail" && comment && comment.length > 1) {
      return true;
    }
    return false;
  };

  return (
    <>
      {check && (
        <>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={onClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Edit
              </Typography>
            </Toolbar>
          </AppBar>
          <div className={classes.dialogBody}>
            <Camera />
            <Typography variant="h6">{check.fields.desc}</Typography>
            <Grid container spacing={3} style={{ "margin-top": "10px" }}>
              <Grid item xs={6}>
                <Button
                  color="inherit"
                  fullWidth
                  variant={status === "Pass" ? "contained" : "outlined"}
                  color="primary"
                  size="large"
                  startIcon={<CheckIcon />}
                  onClick={() => handleStatusChange("Pass")}
                >
                  Pass
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  color="inherit"
                  fullWidth
                  variant={status === "Fail" ? "contained" : "outlined"}
                  color="secondary"
                  size="large"
                  startIcon={<CrossIcon />}
                  onClick={() => handleStatusChange("Fail")}
                >
                  Fail
                </Button>
              </Grid>
            </Grid>
            <Typography variant="h4" style={{ "margin-top": "10px" }}>
              {status}
            </Typography>
            <TextField
              className={classes.textField}
              variant="outlined"
              fullWidth
              label="Comments"
              multiline
              helperText={
                status === "Fail" ? "Comment is required for all failures" : ""
              }
              value={comment}
              onChange={event => setComment(event.target.value)}
            />

            <Button
              color="primary"
              variant="contained"
              onClick={handleSave}
              startIcon={<SaveIcon />}
              fullWidth
              disabled={!enableSave()}
              style={{ "margin-top": "15px" }}
            >
              Save
            </Button>
          </div>
        </>
      )}
    </>
  );
};

CheckEdit.propTypes = {};
CheckEdit.defaultProps = {};

export default CheckEdit;
