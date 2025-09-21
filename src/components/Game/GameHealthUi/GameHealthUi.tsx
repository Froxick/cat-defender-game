import { useEffect, useState } from "react"
import { View } from "react-native"
import { GameHealthUiStyle } from "./GameHealthUiStyle"
interface GameHealthUiProps {
    health: {
        maxHealth: number,
        health: number
    }
}
export const GameHealthUi = ({health} : GameHealthUiProps) => {
    const styles = GameHealthUiStyle
    const renderHealthItems = () => {
            
        const items = [];
            
        for (let i = 0; i < health.maxHealth; i++) {
            if (i < health.health) {
                items.push(
                    <View
                    key={i}
                    style={[styles.healthitem, styles.filledHealth]}
                    />
                );
            } 
            else {
                items.push(
                    <View
                        key={i}
                        style={[styles.healthitem, styles.emptyHealth]}
                    />  
                );   
            }   
        }
        return items;
    };  
    if (health.health <= 0) {
        return null;
    }
    return(
        <View style={styles.container}>
            {renderHealthItems()}
        </View>
    )
}