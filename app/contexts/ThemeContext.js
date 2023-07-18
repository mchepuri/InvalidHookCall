import React, { createContext, useState } from 'react'

import { themeData } from '../data/themeData'

export const ThemeContext = createContext()

function ThemeContextProvider(props) {
    const [theme, setTheme] = useState(themeData.theme);
    const [drawerOpen, setDrawerOpen] = useState(false);
    console.log('ThemeContextProvider ',themeData.theme,props,theme);
    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }  

    const value = {theme, drawerOpen, setHandleDrawer }
    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
}

ThemeContextProvider.whyDidYouRender = true;
export default ThemeContextProvider