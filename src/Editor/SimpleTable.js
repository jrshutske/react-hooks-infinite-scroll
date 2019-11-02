import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
});

export default function SimpleTable(props) {
  const classes = useStyles();
  const { rows, handleScroll, columns, handleLeftClick, handleRightClick } = props;
  return (
    <Paper 
      onScroll={handleScroll && handleScroll}
      style={{ height: '20em', overflowY: 'scroll' }}
      className={classes.root}
    >
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column, i) => (
              <TableCell align={i===0?"left":"right"}>
                {column.displayed}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              {columns.map((column, i) => (
              <TableCell 
                onClick={()=> handleLeftClick 
                  ? handleLeftClick(row) 
                  : handleRightClick(row)} 
                align={i===0?"left":"right"}
              >
                {row[column.attribute]}
              </TableCell>
            ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
