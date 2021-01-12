import React, {createContext, useReducer} from 'react';

export const UserContext = createContext();

const initState = {
    userData:{},
}
const reducer = (state,action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return{
                status: 'Logged In',
                userData: action.payload
            }
        case 'FETCH_ERROR': 
            return{
                userData: {},
                status: "Something went wrong"
            }
        default:
            break;
    }
}

export const UserContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initState);
    return(
        <UserContext.Provider value={{ userStateData: state, userDispatch: dispatch }}>
            {props.children}
        </UserContext.Provider>
    )
}




