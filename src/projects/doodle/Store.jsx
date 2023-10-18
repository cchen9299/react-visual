import React, { createContext, useContext, useState } from "react"
import { PAGE_NAME } from "./constants"

export const StoreContext = createContext({})
export const useStore = () => useContext(StoreContext)

export default function Store({children}){
    const [displayedPage, setDisplayedPage] = useState(PAGE_NAME.PROJECTS)

    const context = {
        displayedPage,
        setDisplayedPage
    }

    return (
        <StoreContext.Provider value={context}>
            {children}
        </StoreContext.Provider>
    )
}