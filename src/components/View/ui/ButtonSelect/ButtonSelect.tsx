import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, Animated, View } from "react-native";
import { ButtonSelectStyles } from "./ButtonSelectStyle";
import { useState, useRef } from "react";
import { Ionicons } from "@expo/vector-icons"; 
interface ButtonSelectProps {
    title: string,
    description: string,
    gradientColors: {
        one: string,
        two: string
    },
    isSelect: boolean,
    onPress: () => void
}
export const ButtonSelect = ({...props}: ButtonSelectProps) => {
    const styles = ButtonSelectStyles;
    const [isExpanded, setIsExpanded] = useState(false);
 

    return (
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.mainButton}
                    onPress={props.onPress}
                >
                    <LinearGradient
                        colors={[
                            props.gradientColors.one,
                            props.gradientColors.two,
                        ]}
                        style={[
                            styles.buttonGradient,
                            props.isSelect && styles.selectedButton
                        ]}
                    >
                       <View style={styles.buttonItem}>
                         <Text style={styles.buttonText}>{props.title}</Text>
                          <TouchableOpacity
                                style={styles.arrowButton}
                                onPress={()=> setIsExpanded(!isExpanded)}
                            >
                                <Ionicons
                                    name={
                                        isExpanded
                                            ? "chevron-up"
                                            : "chevron-down"
                                    }
                                    size={14}
                                    color="white"
                                />
                            </TouchableOpacity>
                       </View>
                        {isExpanded && (
                            <View style={styles.descriptionContainer}>
                                <Text style={styles.descriptionText}>
                                    {
                                        props.description
                                    }
                                </Text>
                            </View>
                        )}
                    </LinearGradient>
                </TouchableOpacity>
            </View>
    );
};