import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import states from "../JSONs/states.json";
import repSens from "../JSONs/repSen.json";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

// import states.json
// map over the array to make select labels and values
const Form = () => {
  const classes = useStyles();
  const [state, setState] = useState("");
  const [repSen, setRepSen] = useState("");

  // const handleChange = (event) => {
  //   setState(event.target.value);
  // };

  return (
    <div>
      <div>Make a selection to find your rep</div>
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel id="state-input-label">Rep or Senator</InputLabel>
          <Select
            labelId="state-select-label"
            id="state-select-id"
            value={repSen}
            onChange={(e) => setRepSen(e.target.value)}
          >
            {repSens.map((repSen) => (
              <MenuItem value={repSen.value}>{repSen.label}</MenuItem>
            ))}
          </Select>
          <FormHelperText>Hi Mom</FormHelperText>
        </FormControl>
      </div>
      <div>
        <FormControl className={classes.formControl}>
          <div>Make a selection to find your rep</div>
          <InputLabel id="state-input-label">State</InputLabel>
          <Select
            labelId="state-select-label"
            id="state-select-id"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            {states.map((state) => (
              <MenuItem value={state.abbreviation}>{state.name}</MenuItem>
            ))}
          </Select>
          <FormHelperText>Hi Mom</FormHelperText>
        </FormControl>
      </div>
    </div>
  );
};

export default Form;
