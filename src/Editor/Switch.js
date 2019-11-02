import React, { useState, useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

const ThemedSwitch = withStyles({
  switchBase: {
    color: blue[300],
    '&$checked': {
      color: blue[500]
    },
    '&$checked + $track': {
      backgroundColor: blue[500]
    }
  },
  checked: {
    color: blue[800]
  },
  track: {
    backgroundColor: blue[800]
  }
})(Switch)

export default function CustomizedSwitches (props) {
  const { setValue, values } = props
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    setValue(checked ? values[1] : values[0])
  }, [checked])

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <ThemedSwitch
            checked={checked}
            onChange={() => setChecked(!checked)}
            value="checked"
          />
        }
        labelPlacement="left"
        label={
          checked
            ? <>{values[0]} <b>{values[1]}</b></>
            : <><b>{values[0]} </b>{values[1]}</>
        }
      />
    </FormGroup>
  )
}
