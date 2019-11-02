import React, { useState, useEffect, useCallback } from 'react'
import SimpleTable from './SimpleTable';
import Grid from '@material-ui/core/Grid'

export default function InfiniteList (props) {
  const { type, fetchdata, leftTableColumns } = props
  const [listItems, setListItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [skip, setSkip] = useState(0);
  const [restart, setRestart] = useState(false);
  const [take, setTake] = useState(10);

  const getData = useCallback(()=>{
    fetchdata(type, take, skip)
      .then((data) => {
        setRestart(false)
        setListItems((prevState) => ([...prevState, ...data]))
      })
    },[type, take, skip])

  useEffect(()=>{
    if (skip !== 0) {
      getData()
    }
  },[skip])

  useEffect(() => {
      setRestart(true)
      setSkip(0)
      setTake(10)
      setListItems([])
      getData()
  }, [type])

  const handleScroll = (event) => {
    const bottomOfList = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight
    if (bottomOfList && !restart) {
      setSkip(prev=>prev+10)
      setTake(10)
    }
  }

  const handleLeftClick = (row) => {
    setSelectedItems([...selectedItems, row])
    let copyOfItems = [...listItems]
    copyOfItems = copyOfItems.filter(item=>item.id !== row.id)
    setListItems(copyOfItems)
    setTake(1)
    skip === 0 
      ? setSkip(prev=>prev+take) 
      : setSkip(prev=>prev+1)
    
  }

  const handleRightClick = (row) => {
    setListItems([...listItems, row])
    let copyOfItems = [...selectedItems]
    copyOfItems = copyOfItems.filter(item=>item.id !== row.id)
    setSelectedItems(copyOfItems)
  }
  
  return (
    <React.Fragment>
      <div>
        <Grid container>
          <Grid item xs={6}>
            <SimpleTable 
              columns={leftTableColumns} 
              rows={listItems} 
              handleScroll={handleScroll}
              handleLeftClick={handleLeftClick}
            />
          </Grid>
          <Grid item xs={6}>
            <SimpleTable 
              columns={leftTableColumns} 
              rows={selectedItems}
              handleRightClick={handleRightClick}
            />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  )
};
