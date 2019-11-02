import React, { useState } from 'react'
import EditorDialog from './Editor/EditorDialog'
import Button from '@material-ui/core/Button'
import fetchdata from './fetch'

const leftTableColumns = [{
    attribute: "id",
    displayed: "ID"
  },{
    attribute: "title",
    displayed: "Title"
  },
  {
    attribute: "type",
    displayed: "Type"
  },
  {
    attribute: "rating",
    displayed: "Rating"
  }
]

export default function BasicComponent () {
  const [type, setType] = useState('Users')
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  console.log(type)
  return (
    <React.Fragment>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleOpen}
      >
        {'Add Approvers'}
      </Button>
      <EditorDialog
        open={open}
        onClose={handleClose}
        title={'Add Approvers'}
        types={['Users', 'Groups']}
        type={type}
        setType={setType}
        leftTableColumns={leftTableColumns}
        fetchdata={fetchdata}
      />
    </React.Fragment>
  )
}
