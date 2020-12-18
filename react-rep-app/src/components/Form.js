import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@material-ui/core";

import RepDetails from "./RepDetails";

import repTypesList from "../JSONs/repTypesList.json";
import statesList from "../JSONs/statesList.json";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 650,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  table: {
    minWidth: 600,
  },
}));

const Form = () => {
  const classes = useStyles();
  const [reps, setReps] = useState([]);
  const [repType, setRepType] = useState("");
  const [state, setState] = useState("");

  const prodUrl = `http://142.93.55.155:3000`;
  const devUrl = `http://localhost:3000`;
  const apiURL = `${devUrl}/${repType}/${state}`;

  const fetchData = async () => {
    try {
      const response = await axios.get(apiURL);
      if (response.data.success) {
        setReps(response.data.results);
      } else {
        setReps(null);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container key="rep-container" className={classes.root}>
      <Grid key="grandparent-grid" component={Paper}>
        <Typography key="title" variant="h2" component="h2">
          Find Your State Representatives!
        </Typography>

        <Grid key="parent-grid">
          <TableContainer key="parent-table-container" component={Paper}>
            <Table
              key="parent-table"
              className={classes.table}
              aria-label="tool table"
            >
              <TableBody key="parent-table-body">
                <TableRow key="repType-tablerow">
                  <TableCell key="repType-tablecell" component="th" scope="row">
                    Select Type of Representative
                  </TableCell>

                  <TableCell key="repType-selection" align="right">
                    <FormControl
                      key="repType-formcontrol"
                      className={classes.formControl}
                      error={!Boolean(repType)}
                    >
                      <InputLabel
                        key="repType-select-label"
                        id="repType-select-label"
                      >
                        Select Rep Type
                      </InputLabel>
                      <Select
                        key="repType-select"
                        labelId="repType-select-label"
                        id="repType-select"
                        value={repType}
                        onChange={(e) => setRepType(e.target.value)}
                      >
                        {repTypesList.map((type) => (
                          <MenuItem key={type.id} value={type.value}>
                            {type.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </TableCell>
                </TableRow>

                <TableRow key="state">
                  <TableCell>Select State</TableCell>

                  <TableCell key="state-cell" align="right">
                    <FormControl
                      key="state-formcontrol"
                      className={classes.formControl}
                      error={!Boolean(state)}
                    >
                      <InputLabel
                        key="state-select-label"
                        id="state-select-label"
                      >
                        Select State
                      </InputLabel>
                      <Select
                        key="state-select"
                        labelId="state-select-label"
                        id="state-select"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                      >
                        {statesList.map((state) => (
                          <MenuItem key={state.id} value={state.abbreviation}>
                            {state.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      <FormControl key="fetch-data-formcontrol" className={classes.formControl}>
        <Button
          key="fetch-data-button"
          variant="contained"
          className="fetch-button"
          onClick={fetchData}
          disabled={!(Boolean(state) && Boolean(repType))}
        >
          Fetch Data
        </Button>
      </FormControl>

      {Boolean(reps) ? (
        reps.map((rep, index) => <RepDetails rep={rep} index={index} />)
      ) : (
        <List key="no-results">
          <ListItem key="no-results-item">
            <ListItemText
              key="no-results-text"
              primary={`No Results`}
            ></ListItemText>
          </ListItem>
        </List>
      )}
    </Container>
  );
};

export default Form;
