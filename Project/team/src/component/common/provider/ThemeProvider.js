import { createContext, useState } from "react"
import {Header} from "../../Header"
import {Blogs} from "../../Blogs"
import {Contact} from "../../Contact"

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
        <Header/>
        <Blogs />
        <Contact />
       </ThemeContext.Provider>
    )
}