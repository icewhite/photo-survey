import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Icon from "@material-ui/core/Icon";
import Divider from "@material-ui/core/Divider";
import { NavLink, withRouter } from "react-router-dom";

const list = [
  {
    primaryText: "Main",
    icon: "folder",
    linkTo: "/main"
  },
  {
    primaryText: "Steps",
    icon: "people",
    linkTo: "/step"
  }
];
const NavContentEx = ({ history }) => {
  const [selected, setSelected] = useState(0);

  const handleClear = () => {
    localStorage.clear();
    history.push("/main");
  };

  return (
    <List>
      {list.map(({ primaryText, icon, linkTo }, i) => (
        <ListItem
          key={primaryText}
          selected={i === selected}
          button
          component={NavLink}
          to={linkTo}
          onClick={() => setSelected(i)}
        >
          <ListItemIcon>
            <Icon>{icon}</Icon>
          </ListItemIcon>
          <ListItemText
            primary={primaryText}
            primaryTypographyProps={{ noWrap: true }}
          />
        </ListItem>
      ))}
      <Divider style={{ margin: "12px 0" }} />
      <ListItem button onClick={handleClear}>
        <ListItemIcon>
          <Icon>settings</Icon>
        </ListItemIcon>
        <ListItemText
          primary={"Clear"}
          primaryTypographyProps={{ noWrap: true }}
        />
      </ListItem>
    </List>
  );
};

NavContentEx.propTypes = {};
NavContentEx.defaultProps = {};

export default withRouter(NavContentEx);
