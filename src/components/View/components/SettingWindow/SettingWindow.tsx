import { Text, View } from "react-native"
import { SettingWindowStyles } from "./SettingWindowStyles"
import { HeaderMenu } from "../../ui/HeaderMenu/HeaderMenu"

export const SettingWindow = () => {
    const styles = SettingWindowStyles
    
    return(
        <View>
           <HeaderMenu 
            title="Настройки"
            titleSize={30}
            subTitleSize={0}
            subtitle=""
            marginTop={20}
           />
        </View>
    )
}