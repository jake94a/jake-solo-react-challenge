import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";

import RepDetails from "./RepDetails";

import repTypesList from "../JSONs/repTypesList.json";
import statesList from "../JSONs/statesList.json";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 600,
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
}));

const Form = () => {
  const classes = useStyles();
  const [reps, setReps] = useState([]);
  const [repType, setRepType] = useState("Senator");
  const [state, setState] = useState("");

  const apiURL = `http://localhost:3000/${repType}/${state}`;

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

  // do you want to find representatives or senators?
  // maybe provide a default
  // select the state you want to look at
  return (
    <Container key="rep-container" className={classes.root}>
      <Typography variant="h2" component="h2">
        Find Your State Representatives!
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel id="repType-select-label">Select Rep Type</InputLabel>
        <Select
          labelId="repType-select-label"
          id="repType-select"
          value={repType}
          onChange={(e) => setRepType(e.target.value)}
        >
          {repTypesList.map((type) => (
            <MenuItem value={type.value}>{type.label}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="state-select-label">Select State</InputLabel>
        <Select
          labelId="state-select-label"
          id="state-select"
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          {statesList.map((state) => (
            <MenuItem value={state.abbreviation}>{state.name}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <Button
          variant="contained"
          className="fetch-button"
          onClick={fetchData}
        >
          Fetch Data
        </Button>
      </FormControl>

      {Boolean(reps) ? (
        reps.map((rep) => <RepDetails rep={rep} />)
      ) : (
        <List key="no-results">
          <ListItem>
            <ListItemText primary={`No Results`}></ListItemText>
          </ListItem>
        </List>
      )}
    </Container>
  );
};

export default Form;
