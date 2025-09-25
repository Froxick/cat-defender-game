import { COLORS } from "@/src/themes/Colors"
import { StyleSheet, Text } from "react-native"

interface PointsCounterProps {
    counter: number,
    text: string,
    color: 'light' | 'dark'
}

export const PointsCounter = ({counter,text,
    color
}: PointsCounterProps) => {
    const styles = StyleSheet.create({
        text: {
            color: color === 'dark' ? '#505050ff' : '#d1d1d1ff', 
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