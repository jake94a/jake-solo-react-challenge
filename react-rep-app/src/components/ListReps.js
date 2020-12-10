// import React from "react";
// import { useState } from "react";
// import Grid from "@material-ui/core/Grid";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import RepDetails from "./RepDetails";

// const ListReps = (props) => {
//   const [selected, setSelected] = useState({});

//   const handleSelect = (event, name) => {
//     const { data } = props;

//     if (data && data.list && data.list.length) {
//       const selected = data.list.find((i) => i.name === name);
//       if (selected) {
//         setSelected(selected);
//       }
//     }

//     return (
//       <div className="Rep-List">
//         <Grid container>
//           <Grid item>
//             <h2>
//               List / <span className="Rep-List-Title">Representatives</span>
//             </h2>
//             <TableContainer>
//               <Table aria-label="simple table">
//                 <TableHead className="Rep-List-Head">
//                   <TableRow>
//                     <TableCell>Name</TableCell>
//                     <TableCell align="right">Party</TableCell>
//                   </TableRow>
//                 </TableHead>
//               </Table>
//               <TableBody>
//                 {data.list.map((row) => (
//                   <TableRow
//                     hover
//                     role="checkbox"
//                     tabIndex={-1}
//                     key={row.name}
//                     selected={row.name === selected.name}
//                     onClick={(event) => handleSelect(event, row.name)}
//                   >
//                     <TableCell component="th" scope="row">
//                       {row.name}
//                     </TableCell>
//                     <TableCell align="right">{row.party}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </TableContainer>
//           </Grid>

//           <Grid item>
//             <RepDetails data={selected} />
//           </Grid>
//         </Grid>
//       </div>
//     );
//   };
// };

// export default ListReps;
