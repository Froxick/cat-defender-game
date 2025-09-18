import { View } from "react-native"
import { StatsWindowStyles } from "./StatsWindowStyle"
import { HeaderMenu } from "../../ui/HeaderMenu/HeaderMenu"

export const StatsWindow = () => {
    const styles = StatsWindowStyles
    return(
        <View>
            <HeaderMenu 
                title="Статистика"
                titleSize={30}
                subTitleSize={0}
                subtitle=""
                marginTop={20}
            />
        </View>
    )
}