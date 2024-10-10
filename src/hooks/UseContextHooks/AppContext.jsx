import { createContext, useContext } from "react";

export const AppContext=createContext();
const ContextProvider=(props)=>{
    const phone="12345678";
    const name="goivnda"
    return(
        <AppContext.Provider value={{phone,name}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider