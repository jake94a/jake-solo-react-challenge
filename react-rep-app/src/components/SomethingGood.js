import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Collapse,
  Container,
  InputLabel,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  FormControl,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

import RepDetails from "./RepDetails";

import repTypesList from "../JSONs/repTypesList.json";
import statesList from "../JSONs/statesList.json";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
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

const SomethingGood = () => {
  const classes = useStyles();
  const [reps, setReps] = useState([]);
  const [repType, setRepType] = useState("");
  const [state, setState] = useState("");

  const apiURL = `http://localhost:3000/${repType}/${state}`;

  const fetchData = async () => {
    try {
      const response = await axios.get(apiURL);
      setReps(response.data.results);
    } catch (e) {
      console.error(e);
    }
  };

  // if response is empty do something

  return (
    <Container>
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

      {reps.map((rep) => (
        <RepDetails rep={rep} />
      ))}
    </Container>
  );
};

export default SomethingGood;
