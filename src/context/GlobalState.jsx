import { createContext, useReducer } from "react";
import { initialState } from "../db/db";
import AppReducer from "./AppReducer";

//create context - useContext hook
export const GlobalContext = createContext(initialState);

export const GlobalState = ({children}) => {
  //provider component - useReducer hook
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  const deleteUser = (id) => {
    dispatch({
        type: 'DELETE_USER',
        payload: id
    })
  }

  const addUser = () => {
    dispatch({
        type: 'ADD_USER',
        payload: e.target.value
    })
  }

  return (
    //useContext hook
    <GlobalContext.Provider
      value={{
        users: state.users,
        deleteUser,
        addUser

      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
