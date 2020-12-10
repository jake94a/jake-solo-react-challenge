import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Collapse,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const RepDetails = (rep) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List>
      <ListItem key="0" button onClick={handleClick}>
        <ListItemText primary={rep.rep.name} secondary={rep.rep.party} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} unmountOnExit>
        <List component="div" disablePadding>
          <ListItem className={classes.nested}>
            <ListItemText primary={`District: ${rep.rep.district}`} />
          </ListItem>

          <ListItem className={classes.nested}>
            <ListItemText primary={`Phone: ${rep.rep.phone}`} />
          </ListItem>

          <ListItem className={classes.nested}>
            <ListItemText primary={`Office: ${rep.rep.office}`} />
          </ListItem>

          <ListItem>
            <Button variant="contained" href={`Link: ${rep.rep.link}`}>
              Link
            </Button>
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
};

export default RepDetails;
