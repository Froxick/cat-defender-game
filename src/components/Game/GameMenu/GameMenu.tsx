import { Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import { GameMenuStyles } from "./GameMenuStyle"
import { LinearGradient } from "expo-linear-gradient"
import { GameMenuButton } from "../GameMenuButtons/GameMenuButton"
import { language } from "@/src/localization/context/useLocalizationHookContext"
import { localization } from "@/src/localization/data/localization"
interface GameMenuProps {
    onClose : () => void,
    visible: boolean,
    onExit: () => void,
    onRestart: () => void,
    language: language
}
export const GameMenu = ({onClose,visible,onExit,language,onRestart} : GameMenuProps) => {
    const styles = GameMenuStyles
    const text = localization[language].gameHud.menu
    return(
        <Modal
            animationType="fade"
            visible={visible}
            transparent={true}
            onRequestClose={() => onClose()}
        >
            <View style={styles.modalOverlay}>
                <TouchableWithoutFeedback
                    onPress={onClose}
                >
                    <View style={{position:'absolute',top:0,bottom: 0,left: 0,right: 0}}/>
                </TouchableWithoutFeedback>
                <View style={styles.modalContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>
                            {text.title}
                        </Text>
                    </View>
                    <View style={styles.contentContainer}>

                    </View>
                </View>
                <View style={styles.buttonsContainer}>
                    <GameMenuButton 
                        gradientColor={
                            {
                                one: '#ece675ff',
                                two: '#b9c25bff'
                            }
                        }
                        onPress={onExit}
                        title={text.buttons.exit}
                    />
                    <GameMenuButton 
                        gradientColor={
                            {
                                one: '#7ee5ffff',
                                two: '#7591ffff'
                            }
                        }
                        onPress={onRestart}
                        title={text.buttons.again}
                    />
                </View>
            </View>
        </Modal>
    )
}