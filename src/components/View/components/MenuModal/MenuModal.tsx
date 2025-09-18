import { ReactNode } from "react"
import { Modal, TouchableWithoutFeedback, View } from "react-native"
import { MenuModalStyles } from "./MenuModalStyle"
interface MenuModalProps {
    onClose : () => void,
    visible: boolean,
    children: ReactNode
}
export const MenuModal = ({...props} : MenuModalProps) => {
    const styles = MenuModalStyles
    return(
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.visible}
            onRequestClose={() => props.onClose()}
        >
            <View style={styles.modalOverlay}>
                <TouchableWithoutFeedback onPress={props.onClose}>
                    <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
                </TouchableWithoutFeedback>
                <View style={styles.modalContainer}>
                    {props.children}
                </View>
            </View>
        </Modal>
    )
}

