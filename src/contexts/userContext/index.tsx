import { createContext } from "react"
import { iCounterContextProps } from "../@types/types"
import { iUserContext } from "./types"


export const UserContext = createContext({} as iUserContext)

export const UserProvider = ({ children }: iCounterContextProps) =>{


    return (
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    )
}