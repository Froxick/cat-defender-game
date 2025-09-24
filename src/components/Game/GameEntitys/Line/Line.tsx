import { Position, Size } from "@/src/types/gameTypes";
import { StyleSheet, View } from "react-native";

interface LineProps {
    position: Position,
    size: Size,
}
const Line = ({size,position}: LineProps) => {
    const styles = StyleSheet.create({
         container: {
            position: 'absolute',
            left: position.x,
            top: position.y,
            width: size.width,
            height: size.height,
            backgroundColor: '#ff8a8aff'
        },
    })
    return (
        <View 
            style={styles.container}
        
        />
    )
}
export default Line;