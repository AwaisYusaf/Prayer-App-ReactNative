import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialData = [
  // {
  //   "2022-04-25": [
  //     { isOffered: false, offeredWithJamat: false },
  //     { isOffered: false, offeredWithJamat: false },
  //     { isOffered: false, offeredWithJamat: false },
  //     { isOffered: false, offeredWithJamat: false },
  //     { isOffered: false, offeredWithJamat: false },
  //   ],
  // },
  // {
  //   "2022-04-24": [
  //     { isOffered: false, offeredWithJamat: false },
  //     { isOffered: false, offeredWithJamat: false },
  //     { isOffered: false, offeredWithJamat: false },
  //     { isOffered: false, offeredWithJamat: false },
  //     { isOffered: false, offeredWithJamat: false },
  //   ],
  // },
];
export const AppContext = createContext(initialData);

export const GlobalContext = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialData);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
//write a function which will return sum of two numbers
