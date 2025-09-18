import { View } from "react-native"
import { LevelsSelectWindowStyles } from "./LevelsSelectWindowStyle"
import { HeaderMenu } from "../../ui/HeaderMenu/HeaderMenu"
import { ButtonSelect } from "../../ui/ButtonSelect/ButtonSelect"
import { LevelsSelectData } from "./LevelsSelectData"
import { useState } from "react"
import { ButtonMenu } from "../../ui/ButtonMenu/ButtonMenu"

export const LevelsSelectWindow = () => {
    const [selectLevel,setSelectLevel] = useState<number>(0)
    const selectLevelFnc = (id: number) => {
        setSelectLevel(id)
    }
    const styles = LevelsSelectWindowStyles
    const levelsButtons = LevelsSelectData
    return(
        <View style={styles.container}>
            <HeaderMenu 
                title="Выбор сложности"
                titleSize={30}
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
                title="Играть"
                gradientColors={
                    {
                        one: '#ff7eb3',
                        two: '#ff758c'
                    }
                }
                navigateTo={() => {}}
           />

        </View>
    )
}