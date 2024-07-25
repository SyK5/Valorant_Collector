import { createContext, useReducer } from "react";
import { ApiReducer, ApiInitial } from "../useReduce/apiReduce";

export const ApiContext = createContext();

export const ContextProvider = ({ children }) => {
  const [Api, ApiDispatch] = useReducer(ApiReducer, ApiInitial);

  return (
    <ApiContext.Provider value={{ Api, ApiDispatch }}>
      {children}
    </ApiContext.Provider>
  );
};
