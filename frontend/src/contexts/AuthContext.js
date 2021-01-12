import React, { createContext, useReducer } from 'react';

export const AuthStatusContext = createContext();

const initState = {
    status: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                status: action.payload,
            }
        case 'FETCH_ERROR':
            return {
                status: action.payload
            }
        default:
            break;
    }
}

export const AuthStatusContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initState);

    return(
        <AuthStatusContext.Provider value={{authState: state,authDispatch: dispatch}}>
            {props.children}
        </AuthStatusContext.Provider>
    )
}