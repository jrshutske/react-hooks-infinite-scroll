import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import Grid from '@material-ui/core/Grid'
import { blue } from '@material-ui/core/colors'
import Infinity from './Infinity'
import CustomizedSwitches from './Switch'
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  DialogTitle: {
    backgroundColor: blue[400],
    color: 'white'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function EditorDialog (props) {
  const { 
    open, 
    onClose, 
    title, 
    types, 
    type, 
    setType, 
    fetchdata, 
    leftTableColumns } = props
  const classes = useStyles()
  const handleClose = () => onClose()
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      maxWidth={"xl"}
    >
      <DialogTitle className={classes.DialogTitle} id="simple-dialog-title">
        {title}
      </DialogTitle>
      <Grid alignItems="center" container>
        <Grid item xs={6}>
          <TextField
            id="standard-search"
            label="Search field"
            type="search"
            className={classes.textField}
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          {types && 
            <CustomizedSwitches
              value={type}
              values={types}
              setValue={setType}
            />
          }
        </Grid>
      </Grid>
      
      <Infinity
        fetchdata={fetchdata}
        type={type && type}
        leftTableColumns={leftTableColumns}
      />
    </Dialog>
  )
}
