import {  Modal, Text, TouchableOpacity, View } from "react-native"
import { GameOverStyles } from "./GameOverStyles"
import { GameMenuButton } from "../GameMenuButtons/GameMenuButton"
interface GameOverMenuProps {
    title: string,
    buttonText: string,
    onClose: () => void,
}
export const GameOverMenu = ({title,buttonText,onClose}: GameOverMenuProps) => {
    const styles = GameOverStyles
    return(
        <Modal animationType="fade" transparent={true}>
            <View style={styles.container}>
                 <View style={styles.content}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>
                            {title}
                        </Text>
                    </View>
                </View>
                <View style={styles.buttons}>
                    <GameMenuButton 
                        gradientColor={
                            {
                                one: '#ec9975ff',
                                two: '#c27c5bff'
                            }
                        }
                        onPress={onClose}
                        title={buttonText}
                    />
                   
                </View>
            </View>
           
        </Modal>
    )
}