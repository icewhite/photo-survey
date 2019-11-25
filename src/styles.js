const pageStyle = theme => ({
  root: {
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
});

export { pageStyle };
