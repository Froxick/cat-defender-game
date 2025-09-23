import { View } from "react-native"
import { LevelsSelectWindowStyles } from "./LevelsSelectWindowStyle"
import { HeaderMenu } from "../../ui/HeaderMenu/HeaderMenu"
import { ButtonSelect } from "../../ui/ButtonSelect/ButtonSelect"
import { LevelsSelectData } from "./LevelsSelectData"
import { useState } from "react"
import { ButtonMenu } from "../../ui/ButtonMenu/ButtonMenu"
import { language } from "@/src/localization/context/useLocalizationHookContext"
import { localization } from "@/src/localization/data/localization"
import { useRouter } from "expo-router"
interface LevelsSelectWindowProps {
    language: language
}
export const LevelsSelectWindow = ({language} : LevelsSelectWindowProps) => {
    const text = localization[language].homeMenu.menuModal
    const [selectLevel,setSelectLevel] = useState<number>(1)
    const router = useRouter()
    const selectLevelFnc = (id: number) => {
        setSelectLevel(id)
    }
    const startGameNavigate = () => {
        router.replace({
            pathname: '/game/game',
            params: {
                difficulty: selectLevel.toString()
            }
        })
    }
    const styles = LevelsSelectWindowStyles
    const levelsButtons = LevelsSelectData(language)
    return(
        <View style={styles.container}>
            <HeaderMenu 
                title={text.titles.GameSelect}
                titleSize={32}
                subTitleSize={0}
                subtitle=""
                marginTop={20}
            />
            <View style={styles.buttonContainer}>
                {
                levelsButtons.map(el => (
                    <ButtonSelect 
                        key={el.id}
                        title={el.title}
                        description={el.description}
                        gradientColors={el.gradientColors}
                        isSelect={selectLevel === el.id}
                        onPress={() => selectLevelFnc(el.id)}

                    />
                ))
            }
            </View>
            

           <ButtonMenu 
                title={text.buttons.play}
                gradientColors={
                    {
                        one: '#ff7eb3',
                        two: '#ff758c'
                    }
                }
                navigateTo={startGameNavigate}
           />

        </View>
    )
}