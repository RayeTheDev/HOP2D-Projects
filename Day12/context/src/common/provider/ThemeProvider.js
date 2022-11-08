import { createContext, useState } from "react"
import {Content} from "../../component/Content"
import { Header } from "../../component/Header"

export const ThemeContext = createContext({})

export const ThemeProvider = () => {
    const [theme, setTheme] = useState({
        pallate: {
            dark: false,
        },
    })

    const changeDarkTheme = () => {
        setTheme({...theme, pallate: {dark: !theme.pallate.dark}})
    }
    
    return(
       <ThemeContext.Provider value = {{theme, changeDarkTheme, data: "string"}}>
        <Content/>
        <Header/>
       </ThemeContext.Provider>
    )
}