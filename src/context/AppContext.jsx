import { createContext } from "react";
import { doctors } from "../assets/assets";
export const AppContext = createContext

const AppContextProvider = (props)=>{


    const value ={
        doctors

    }
    return(
        <AppContext.provider value={value}>
            {props.children}
        </AppContext.provider>
    )
}

export default AppContextProvider