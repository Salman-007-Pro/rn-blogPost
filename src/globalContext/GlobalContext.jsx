//main
import React, { createContext, useReducer } from "react";

//actions
import * as action from "../Action/globalActions";

//reducer
import globalReducer from "../Reducer/globalReducer";

const createGlobalContext = (actions, reducer, initialState) => {
  const Context = createContext();
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const boundActions = {};
    for (key in actions) {
      boundActions[key] = actions[key](dispatch);
    }
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };
  return { Context, Provider };
};

export const { Context, Provider } = createGlobalContext(
  action,
  globalReducer,
  []
);
