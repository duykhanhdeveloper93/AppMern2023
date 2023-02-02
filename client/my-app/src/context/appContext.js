import { useState, useReducer,useContext } from "react"
import React from "react";
import reducer from "./reducer";
import { DISPLAY_ALERT } from "./actions";


const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '', 
    alertType: '',

}


const AppContext = React.createContext()

const AppProvider = ({children}) => {


    const [state, setState] = useReducer(reducer,initialState);

    const displayAlert = () => {
        dispatchEvent({type:DISPLAY_ALERT})
    }

    return <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
}
const useAppContext = () => {
    return useContext(AppContext);
  };

export { AppProvider, initialState,useAppContext};
