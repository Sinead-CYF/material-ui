import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(step, explanation) {
  return { step, explanation };
}

const rows = [
  createData("S", "lorem ipsum dolar shmit"),
  createData("T", "lorem ipsum dolar shmit"),
  createData("A", "lorem ipsum dolar shmit"),
  createData("R", "lorem ipsum dolar shmit"),
];

export default function BasicTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        width: "fit-content",
        margin: "auto",
        marginBottom: "1.5rem",
      }}
    >
      <Table
        sx={{ minWidth: 650, textAlign: "center" }}
        aria-label="simple table"
      >
        <caption>A basic table example with a caption</caption>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                textAlign: "center",
              }}
            >
              Step
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
              }}
            >
              Explanation
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.step}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{
                  textAlign: "center",
                }}
              >
                {row.step}
              </TableCell>
              <TableCell
                sx={{
                  width: "fit-content",
                  textAlign:"center"
                }}
              >
                {row.explanation}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
