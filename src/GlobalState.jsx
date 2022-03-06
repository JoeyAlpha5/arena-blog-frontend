import React, {createContext} from 'react';
import GetArticles from './api/GetArticles';
// create global state using React Context that will pass API data to chilren components and screens
export const GlobalState = createContext();
export const APIDataProvider = ({children}) => {
    // fetch the articles from the API
    const articles = GetArticles();
    return(
        <GlobalState.Provider value={articles}>
            {children}
        </GlobalState.Provider>
    )
}

