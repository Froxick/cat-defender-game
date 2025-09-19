import { View } from "react-native"
import { StatsWindowStyles } from "./StatsWindowStyle"
import { HeaderMenu } from "../../ui/HeaderMenu/HeaderMenu"
import { language } from "@/src/localization/context/useLocalizationHookContext"
import { localization } from "@/src/localization/data/localization"
interface StatsWindowProps {
    language: language
}
export const StatsWindow = ({language}: StatsWindowProps) => {
    const styles = StatsWindowStyles
    const text = localization[language].homeMenu.menuModal.titles
    return(
        <View>
            <HeaderMenu 
                title={text.GameStats}
                titleSize={30}
                subTitleSize={0}
                subtitle=""
                marginTop={20}
            />
        </View>
    )
}