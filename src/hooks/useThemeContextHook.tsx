import { createContext,useEffect,useState } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage'

interface Theme {
    colors: {
        textColor: string,
        backgroundColor: string,
        card: string,
        textSecondary: string,
        primary: string,
        secondary: string,
        buttonText: string
    }
}
interface ThemeContextType {
    colors: Theme['colors']
    themeName: string,
    setTheme: (themeName: string) => void
}

const themes = {
    dark: {
        colors: {

        }
    },
    light: {
        colors: {

        }
    }
}


const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider : React.FC<{children : React.ReactNode}> = ({children}) => {
    const [themeName,setThemeName] = useState<string>('dark')
    useEffect(() => {
        loadTheme()
    },[])
    const loadTheme = async() => {
        try{
            const savedTheme = await AsyncStorage.getItem('theme')
            if(!savedTheme) {
                setThemeName('dark')
            } else{
                setThemeName(
                    savedTheme
                )
            }
        }catch(e){
            console.error('Ошибка загрузки темы',e)
        }
    }
    const setTheme = async(themeName: string) => {
        try{

        }catch(e){
            
        }
    }
    return(
        <ThemeContext.Provider value={undefined}>
            {children}
        </ThemeContext.Provider>
    )
}