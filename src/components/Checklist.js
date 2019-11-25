import React, { useState, forwardRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Button,
  Dialog,
  Slide
} from "@material-ui/core";
import {
  CheckCircle as CheckIcon,
  Cancel as CrossIcon
} from "@material-ui/icons";

import CheckEdit from "./CheckEdit";

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
  },
  inline: {
    display: "inline"
  }
}));

const Checklist = ({ list, onChange }) => {
  const classes = useStyles();
  const [selectedCheck, setSelectedCheck] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleEditClicked = (sectionIndex, stepIndex) => {
    setOpenDialog(true);
    setSelectedCheck({
      fields: list[sectionIndex].steps[stepIndex],
      sectionIndex,
      stepIndex
    });
  };

  console.log(`openDialog: ${openDialog}`);

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleSave = check => {
    console.log(check.fields);
    list[check.sectionIndex].steps[check.stepIndex] = check.fields;
    setOpenDialog(false);
    onChange(list);
  };

  const handleCloseCheckEdit = () => {
    console.log("CLosing time");
    setOpenDialog(false);
  };

  return (
    <div className={classes.root}>
      {list.map((section, sectionIndex) => (
        <div key={`cls_${sectionIndex}`}>
          <Typography weight={"bold"} variant={"h4"} gutterBottom>
            {section.title}
          </Typography>

          <List className={classes.root}>
            {section.steps.map((step, stepIndex) => (
              <>
                <ListItem alignItems="flex-start">
                  <ListItemIcon>
                    {step.status === "Pass" && (
                      <CheckIcon fontSize="large" color="primary" />
                    )}
                    {step.status === "Fail" && (
                      <CrossIcon fontSize="large" color="secondary" />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={step.desc}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textSecondary"
                        >
                          {step.comment ? `- ${step.comment}` : ""}
                        </Typography>
                      </React.Fragment>
                    }
                  />

                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleEditClicked(sectionIndex, stepIndex)}
                  >
                    {step.status ? "Edit" : "Go"}
                  </Button>
                </ListItem>
                <Divider variant="inset" component="li" />
              </>
            ))}
          </List>
        </div>
      ))}

      <Dialog
        fullScreen
        open={openDialog}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <CheckEdit
          check={selectedCheck}
          onClose={handleCloseCheckEdit}
          onSave={handleSave}
        />
      </Dialog>
    </div>
  );
};

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

Checklist.propTypes = {};
Checklist.defaultProps = {};

export default Checklist;
