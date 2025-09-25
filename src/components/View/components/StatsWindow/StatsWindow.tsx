import { Text, View } from "react-native"
import { StatsWindowStyles } from "./StatsWindowStyle"
import { HeaderMenu } from "../../ui/HeaderMenu/HeaderMenu"
import { language } from "@/src/localization/context/useLocalizationHookContext"
import { localization } from "@/src/localization/data/localization"
import { statsKey } from "@/src/store/useStatsStore"
interface StatsWindowProps {
    language: language,
    stats: statsKey
}
export const StatsWindow = ({language,stats}: StatsWindowProps) => {
    const styles = StatsWindowStyles
    const text = localization[language].homeMenu.menuModal
    return(
        <View>
            <HeaderMenu 
                title={text.titles.GameStats}
                titleSize={30}
                subTitleSize={0}
                subtitle=""
                marginTop={20}
            />
            <View style={styles.contentContainer}>
                <View style={styles.statsContainer}>
                     <Text style={styles.statsText}>
                        <Text style={{color: 'green'}}>{text.buttons.easy}</Text> : <Text style={styles.statsNumber}>{stats.resultEasy}</Text> {language === 'ru' ? 'очков': 'points'}
                    </Text>
                    <Text style={styles.statsText}>
                        <Text style={{color: '#ffbf00ff'}}>{text.buttons.medium}</Text> : <Text style={styles.statsNumber}>{stats.resultMedium}</Text>  {language === 'ru' ? 'очков': 'points'}
                    </Text>
                    <Text style={styles.statsText}>
                        <Text style={{color: 'red'}}>{text.buttons.hard}</Text> : <Text style={styles.statsNumber}>{stats.resultHard}</Text>   {language === 'ru' ? 'очков': 'points'}
                    </Text>
                </View>
            </View>
        </View>
    )
}