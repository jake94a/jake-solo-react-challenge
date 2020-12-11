import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Collapse,
  Divider,
  Link,
  List,
  ListItem,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core";
import {
  ExpandLess,
  ExpandMore,
  HomeWork,
  Http,
  Mail,
  Phone,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 200,
  },
}));

const RepDetails = (rep) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  // senators don't have districts
  /*
   * District
   * Phone
   * Office
   * Link
   */
  return (
    <List key="rep-list" component="nav" aria-label="rep list">
      <ListItem key={rep.rep.name} button onClick={handleClick}>
        <ListItemText primary={rep.rep.name} secondary={rep.rep.party} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Divider />
      <Collapse in={open} unmountOnExit>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableBody>
              {rep.rep.district && (
                <TableRow key={rep.rep.district}>
                  <TableCell component="th" scope="row">
                    <HomeWork />
                  </TableCell>
                  <TableCell>District</TableCell>
                  <TableCell>{rep.rep.district}</TableCell>
                </TableRow>
              )}

              <TableRow key={rep.rep.phone}>
                <TableCell component="th" scope="row">
                  <Phone />
                </TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>{rep.rep.phone}</TableCell>
              </TableRow>

              <TableRow key={rep.rep.office}>
                <TableCell component="th" scope="row">
                  <Mail />
                </TableCell>
                <TableCell>Office</TableCell>
                <TableCell>{rep.rep.office}</TableCell>
              </TableRow>

              <TableRow key={rep.rep.link}>
                <TableCell component="th" scope="row">
                  <Http />
                </TableCell>
                <TableCell>Website</TableCell>
                <TableCell>
                  <Link href={rep.rep.link}>{rep.rep.link}</Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Collapse>
    </List>
  );
};

export default RepDetails;
