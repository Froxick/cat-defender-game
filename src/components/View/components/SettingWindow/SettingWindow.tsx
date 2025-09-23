import { Text, View } from "react-native"
import { SettingWindowStyles } from "./SettingWindowStyles"
import { HeaderMenu } from "../../ui/HeaderMenu/HeaderMenu"
import { language } from "@/src/localization/context/useLocalizationHookContext"
import { localization } from "@/src/localization/data/localization"
import { LanguageSelector } from "../LanguageSelector/LanguageSelector"

 "../LanguageSelector/LanguageSelector"
interface SettingWindowProps {
    language: language
}
export const SettingWindow = ({language} : SettingWindowProps) => {
    const styles = SettingWindowStyles
    const text = localization[language].homeMenu.menuModal.titles
    return(
        <View>
           <HeaderMenu 
            title={text.GameSetting}
            titleSize={32}
            subTitleSize={0}
            subtitle=""
            marginTop={20}
           />
           <View style={styles.localizationContainer}>
            <LanguageSelector/>
           </View>
        </View>
    )
}