import React, { useState } from 'react';
import fetchdata from './fetch'

export default function InfiniteList() {
  const [listItems, setListItems] = useState([]);
  const [skipState, setSkipState] = useState(0)
  const [termState, setTermState] = useState("")
  const [restartState, setRestartState] = useState(false)
  const [isFetching, setIsFetching] = useState(true)
  const take = 5
  
  function handleChange(term) {
    setRestartState(true)
    setListItems([])
    setSkipState(0)
    fetchMoreListItems(term, true)
  }

  function fetchMoreListItems(term, restart) {
      setIsFetching(true);
      fetchdata(term ? term : termState, take, restart ? 0 : skipState)
        .then((data)=>{
          setRestartState(false)
          term && setTermState(term)
          setListItems(prevState => ([...prevState, ...data]));
          setSkipState(prevState=>prevState+10)
          setIsFetching(false);
        })  
  }

  const handleScroll = (event) => {
    const bottomOfList = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight
    if ( bottomOfList && !restartState) {
      fetchMoreListItems()
     }
  }

  return (
    <>
      <button onClick={()=>handleChange("park")}>park</button>
      <button onClick={()=>handleChange("toys")}>toys</button>
      <button onClick={()=>handleChange("time")}>time</button>
      <ul onScroll={handleScroll} style={{height:"20em", overflowY:"scroll"}} id="mine">
        {listItems.map(listItem => <img alt={"pictures of something"} src={listItem.images.original.url} className="list-group-item"/>)}
      </ul>
      {isFetching && "FETCHING.."}
    </>
  );
};
