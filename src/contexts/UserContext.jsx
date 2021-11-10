import React, {useState, createContext} from 'react'

export const UserContext = createContext()

export function UserProvider({children}){
    const [openMenu,setOpenMenu] = useState(false)
    const UserContextValue={openMenu,setOpenMenu}
    return(
        <UserContext.Provider value={UserContextValue}>
            {children}
        </UserContext.Provider>
    )

}