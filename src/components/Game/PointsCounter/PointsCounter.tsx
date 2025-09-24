import { COLORS } from "@/src/themes/Colors"
import { StyleSheet, Text } from "react-native"

interface PointsCounterProps {
    counter: number,
    text: string
}

export const PointsCounter = ({counter,text}: PointsCounterProps) => {
    const styles = StyleSheet.create({
        text: {
            color: '#505050ff',
            fontSize: 15,
            fontWeight: 'bold',
            textAlign: 'center'
        }
    })
    return (
        <Text style={styles.text}>
            {text}:  {counter}
        </Text>
    )
}