import { useState, useReducer, useContext } from "react"
import React from "react";
import reducer from "./reducer";
import { DISPLAY_ALERT } from "./actions";
import { CLEAR_ALERT } from "./actions";

const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',

}


const AppContext = React.createContext()

const AppProvider = ({ children }) => {

   
    const [state, dispatch] = useReducer(reducer, initialState);

    const displayAlert = () => {
        dispatch({ type: DISPLAY_ALERT })
        console.log('Show thong bao')
        clearAlert()
    }

    const clearAlert = () => {
        setTimeout(() => {
            dispatch({ type: CLEAR_ALERT })
        }, 3000)
    }

    return (<AppContext.Provider value={{ ...state,displayAlert }}>{children}</AppContext.Provider>)
}
const useAppContext = () => {
    return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext };
