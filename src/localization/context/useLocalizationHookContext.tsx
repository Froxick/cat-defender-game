import { createContext,useContext,useEffect,useState } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';

export type language = 'ru' | 'en'
interface LocalizationContextType {
    language: language,
    setLenguage: (language: language) => void
}
const initialState : LocalizationContextType = {
    language: 'ru',
    setLenguage: (language: language) => {}
}

export const LocalizationContext = createContext<LocalizationContextType>(initialState)
export const LocalizationProvider : React.FC<{children : React.ReactNode}> = ({children}) => {
    const[language,setLanguage] = useState<language>('ru')
    const loadLanguage = async() => {
        try{
            const loadLanguage = await AsyncStorage.getItem('language')
            if(!loadLanguage) {
                setLanguage('ru')
                await AsyncStorage.setItem('language','ru')
            }
            else{
                setLanguage(loadLanguage as language)
            }
        }catch(e){
            console.error('Ошибка загрузки')
        }
    }
    useEffect(() => {
        loadLanguage()
    },[])

    const setLanguageFnc = async(language: language) => {
        try{
            await AsyncStorage.setItem('language',language)
            setLanguage(language)
        }catch(e){
            console.error('Ошибка обновления')
        }
    }

    const value : LocalizationContextType = {
        language: language,
        setLenguage: setLanguageFnc
    } 
    return(
        <LocalizationContext.Provider
            value={value}
        >
            {children}
        </LocalizationContext.Provider>
    )
}
