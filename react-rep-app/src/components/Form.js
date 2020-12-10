// import React from "react";
// import { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";

// import states from "../JSONs/states.json";
// import repSens from "../JSONs/repSen.json";

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

// let DEV_URL = "";
// if (process.env.NODE_ENV === "development") {
//   DEV_URL = "http://localhost:3000";
// }

// const Form = (repSen, repState) => {
//   const classes = useStyles();
//   const [state, setState] = useState("");
//   const [repOrSen, setRepOrSen] = useState("");

//   async function callApi() {
//     try {
//       const apiResponse = await fetch(`${DEV_URL}/${repOrSen}/${state}`);

//       // what does this accomplish?
//       const resDetails = await apiResponse.json;
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   const handleSubmit = () => {
//     if (Boolean(state) && Boolean(repOrSen)) {
//       callApi();
//     } else {
//       console.log("error message of some kind for no state or no rep/sen");
//     }
//   };

//   // return some jsx
//   return (
//     <form onSubmit={handleSubmit} className="Rep-Finder-Form">
//       <div>
//         <div>Make a selection to find your rep</div>
//         <FormControl className={classes.formControl}>
//           <InputLabel id="repSen-input-label">Rep or Senator</InputLabel>
//           <Select
//             labelId="repSen-select-label"
//             id="repSen-select-id"
//             value={repOrSen}
//             onChange={(e) => setRepOrSen(e.target.value)}
//           >
//             {repSens.map((repSen) => (
//               <MenuItem value={repSen.value}>{repSen.label}</MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//       </div>

//       <div>
//         <div>Make a selection to find your rep</div>
//         <FormControl className={classes.formControl}>
//           <InputLabel id="state-input-label">State</InputLabel>
//           <Select
//             labelId="state-select-label"
//             id="state-select-id"
//             value={state}
//             onChange={(e) => setState(e.target.value)}
//           >
//             {states.map((state) => (
//               <MenuItem value={state.abbreviation}>{state.name}</MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//       </div>
//     </form>
//   );
// };

// export default Form;
