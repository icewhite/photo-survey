import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const FooterEx = () => (
  <div style={{ maxWidth: 700, margin: "auto", textAlign: "center" }}>
    <Typography variant="caption" align={"center"}>
      © Copyright 2019
    </Typography>
    <Divider style={{ margin: "24px auto", width: 60 }} />
  </div>
);

FooterEx.propTypes = {};
FooterEx.defaultProps = {};

export default FooterEx;
