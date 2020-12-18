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
    <List key={`rep-index-${rep.index}`} component="nav" aria-label="rep list">
      <ListItem key={`rep-name-${rep.rep.name}`} button onClick={handleClick}>
        <ListItemText
          key={`rep-name-index-${rep.index}`}
          primary={rep.rep.name}
          secondary={rep.rep.party}
        />
        {open ? (
          <ExpandLess key={`expandless-${rep.index}`} />
        ) : (
          <ExpandMore key={`expandmore-${rep.index}`} />
        )}
      </ListItem>
      <Divider key={`table-divider-${rep.index}`} />
      <Collapse
        key={`rep-details-collapse-${rep.index}`}
        in={open}
        unmountOnExit
      >
        <TableContainer
          key={`rep-detail-table-container-${rep.index}`}
          component={Paper}
        >
          <Table
            key={`rep-detail-table-${rep.index}`}
            className={classes.table}
            aria-label="simple table"
          >
            <TableBody key={`rep-detail-tablebody-${rep.index}`}>
              {rep.rep.district && (
                <TableRow key={rep.rep.district}>
                  <TableCell
                    key={`table-cell-0-${rep.index}`}
                    component="th"
                    scope="row"
                  >
                    <HomeWork key={`district-icon-${rep.index}`} />
                  </TableCell>
                  <TableCell key={`table-cell-district-${rep.index}`}>
                    District
                  </TableCell>
                  <TableCell key={`table-cell-district-details-${rep.index}`}>
                    {rep.rep.district}
                  </TableCell>
                </TableRow>
              )}
              <TableRow key={rep.rep.phone}>
                <TableCell
                  key={`table-cell-1-${rep.index}`}
                  component="th"
                  scope="row"
                >
                  <Phone key={`phone-icon-${rep.index}`} />
                </TableCell>
                <TableCell key={`table-cell-phone-${rep.index}`}>
                  Phone
                </TableCell>
                <TableCell key={`table-cell-phone-details-${rep.index}`}>
                  {rep.rep.phone}
                </TableCell>
              </TableRow>
              <TableRow key={rep.rep.office}>
                <TableCell
                  key={`table-cell-2-${rep.index}`}
                  component="th"
                  scope="row"
                >
                  <Mail key={`office-icon-${rep.index}`} />
                </TableCell>
                <TableCell key={`table-cell-office-${rep.index}`}>
                  Office
                </TableCell>
                <TableCell key={`table-cell-office-details-${rep.index}`}>
                  {rep.rep.office}
                </TableCell>
              </TableRow>
              <TableRow key={rep.rep.link}>
                <TableCell
                  key={`table-cell-3-${rep.index}`}
                  component="th"
                  scope="row"
                >
                  <Http key={`link-icon-${rep.index}`} />
                </TableCell>
                <TableCell key={`table-cell-link-${rep.index}`}>
                  Website
                </TableCell>
                <TableCell key={`table-cell-link-details-${rep.index}`}>
                  <Link key={`rep-link-${rep.rep.link}`} href={rep.rep.link}>
                    {rep.rep.link}
                  </Link>
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
