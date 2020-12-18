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

  // when deploying, use production URL
  // for testing, use dev URL

  // production URL
  const url = `http://142.93.55.155:3000`;

  // dev URL
  // const url = `http://localhost:3000`;

  const apiURL = `${url}/${repType}/${state}`;

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
    <Container className={classes.root}>
      <Grid component={Paper}>
        <Typography variant="h2" component="h2">
          Find Your State Representatives!
        </Typography>

        <Grid>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="tool table">
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Select Type of Representative
                  </TableCell>

                  <TableCell align="right">
                    <FormControl
                      className={classes.formControl}
                      error={!Boolean(repType)}
                    >
                      <InputLabel id="repType-select-label">
                        Select Rep Type
                      </InputLabel>
                      <Select
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

                <TableRow>
                  <TableCell>Select State</TableCell>

                  <TableCell align="right">
                    <FormControl
                      className={classes.formControl}
                      error={!Boolean(state)}
                    >
                      <InputLabel id="state-select-label">
                        Select State
                      </InputLabel>
                      <Select
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

      <FormControl className={classes.formControl}>
        <Button
          variant="contained"
          className="fetch-button"
          onClick={fetchData}
          disabled={!(Boolean(state) && Boolean(repType))}
        >
          Fetch Data
        </Button>
      </FormControl>

      {Boolean(reps) ? (
        reps.map((rep, index) => (
          <RepDetails key={index} rep={rep} index={index} />
        ))
      ) : (
        <List>
          <ListItem>
            <ListItemText primary={`No Results`}></ListItemText>
          </ListItem>
        </List>
      )}
    </Container>
  );
};

export default Form;
