import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from "react-native"
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from "@react-navigation/native"
import { ButtonMenu } from "../../ui/ButtonMenu/ButtonMenu"
import { COLORS } from "@/src/themes/Colors"
import { HomeMenuStyles } from "./HomeMenuStyles"
import { buttonsProps } from "./HomeButtonsData"
import { HeaderMenu } from "../../ui/HeaderMenu/HeaderMenu"

export const HomeMenu = () => {
  const navigation = useNavigation()
  const styles = HomeMenuStyles
  const navigationTo = (url: string) => {
    navigation.navigate(url as never);
  }
  const buttonProps = buttonsProps(navigationTo)
  return (
    <LinearGradient
      colors={[COLORS.HomeMenuGradient.one, COLORS.HomeMenuGradient.two]}
      style={styles.container}
    >
      <HeaderMenu 
        title="Cat Defender"
        subtitle="Пушистый защитник"
        titleSize={45}
        subTitleSize={20}
      />    
      <View style={styles.menuButtons}>
       
        {buttonProps.map(el => (
            <ButtonMenu key={el.id} title={el.title} 
                navigateTo={el.navigateTo}
                gradientColors={el.gradientColors}
            />
        ))}
      </View>
    </LinearGradient>
  )
}
