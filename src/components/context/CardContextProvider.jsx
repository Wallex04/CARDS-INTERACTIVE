import { createContext, useState } from "react";

export const CardContext = createContext();

const CardContextProvider = ({children}) => {
    const[card, setCard]=useState(1);

    return(
        <CardContext.Provider
        value={{
       card: card,
        setCard
        }}
        >
        {children}
        </CardContext.Provider>
        )
}

export default CardContextProvider;