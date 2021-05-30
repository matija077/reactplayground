/* eslint-disable */
import React, { useEffect, useState, useReducer, useCallback, useMemo } from "react";
import Table from 'react-bootstrap/Table'

let pointerSet = new Map();
pointerSet.set("customHook", new Set());
pointerSet.set("state", new Set());
pointerSet.set("dispatch", new Set());

const useCustomHook = () => {
  const [state, setState] = useState(0);

  return () => {console.log("tu"); setState( (pState) => ++pState)}
}

function initReducer(init) {
  console.log(init);

  return {
    ...init,
    counter: 0
  };sadas
}sdsd

const actionMap = {
  refresh: "refresh",
  deleteSet: "deleteSet",dsd
  restore: "restore"
}

const reducerMap = {
  [actionMap.refresh]: (prevState, payload) => {
    console.log(prevState)
    return {
      ...prevState,
      counter: ++(prevState.counter)
    }
  },
  [actionMap.deleteSet]: (prevState, payload) => {
    const newPointerSet = new Map();

    pointerSet.entries( (key, value) => newPointerSet.set(key, new Set()))
    pointerSet = newPointerSet;

    return prevState
  },
  [actionMap.restore]: (prevState, payload) => {
    return initReducer();
  },
}

function reducer(prevState, action) {
  console.log(action)
  const state = reducerMap[action.type] ? reducerMap[action.type](prevState, action.payload) : prevState


  return state;
}

function createAction(type, payload = undefined, error = undefined) {
  return {
    type,
    payload,
    error 
  }
}

function refresh() {
  return createAction(actionMap.refresh);
}

function deleteSet() {
  return createAction(actionMap.deleteSet)
}

function restore() {
  return createAction(actionMap.restore)
}

const Tablica = () => {

  const [state, dispatch] = useReducer(reducer, {test: 2}, initReducer)

  //const customHook2 = useMemo(useCustomHook, []);
  const customHook = useCallback(useCustomHook(), []);
 console.log(customHook);
 //console.log(customHook2);

  console.log(pointerSet)
  //pointerSet.get("customHook").àdd(customHook);
  const customHookSet = pointerSet.get("customHook")
  customHookSet.add(customHook)
  const stateSet = pointerSet.get("state")
  stateSet.add(state)
  const dispatchSet = pointerSet.get("dispatch")
  dispatchSet.add(dispatch)
  //pointerSet.get("state").add(state);
  //pointerSet.get("dispatch").add(dispatch);

  /*useEffect(() => {
    console.log(pointerSet);
  }, [pointerSet.size])*/

  console.log(pointerSet)
  return (
  
    <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacoob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
      <tr>
        <td>
          <button onClick={() => dispatch(refresh())}>Refresh!</button>
        </td>
        <td>
          <button onClick={() => dispatch(restore())}>restore!</button>
        </td>
        <td>
          <button onClick={() => dispatch(deleteSet())}>deleteSet!</button>
        </td>
        <td>
          <button onClick={() => customHook ()}>Custom \hook!</button>
        </td>
      </tr>
    </tbody>
  </Table>
   
  )
}

export default Tablica


    