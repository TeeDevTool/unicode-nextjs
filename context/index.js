import { useState, useEffect, useReducer, createContext } from "react";
import { data } from "./reducers/data";

import fakeData from "data/menus";

// initial state
const initialState = {
  data: fakeData.map((row) => ({
    ...row,
    added: false,
    value: 1,
    valueAdd: 0,
    handleClear: (index) =>
      setData((getData) =>
        getData.map((row, dataIndex) => {
          if (index === dataIndex) {
            return { ...row, added: false, valueAdd: 0 };
          }
          return row;
        })
      ),
    handleAdd: (index, value) =>
      setData((getData) =>
        getData.map((row, dataIndex) => {
          if (index === dataIndex) {
            return { ...row, added: true, valueAdd: value };
          }
          return row;
        })
      ),
    handleCounter: (index, type) =>
      setData((getData) =>
        getData.map((row, dataIndex) => {
          if (index === dataIndex) {
            return { ...row, value: stepper(type, row.value) };
          }
          return row;
        })
      ),
  })),
};

// create context
const Context = createContext({});

// combine reducer function
const combineReducers =
  (...reducers) =>
  (state, action) => {
    for (let i = 0; i < reducers.length; i++)
      state = reducers[i](state, action);
    return state;
  };

// context provider
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(combineReducers(data), initialState);
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };
