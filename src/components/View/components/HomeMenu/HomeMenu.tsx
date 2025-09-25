import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from "react-native"
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from "@react-navigation/native"
import { ButtonMenu } from "../../ui/ButtonMenu/ButtonMenu"
import { COLORS } from "@/src/themes/Colors"
import { HomeMenuStyles } from "./HomeMenuStyles"
import { buttonsProps } from "./HomeButtonsData"
import { HeaderMenu } from "../../ui/HeaderMenu/HeaderMenu"
import { useContext, useState } from "react"
import { MenuModal } from "../MenuModal/MenuModal"
import { SettingWindow } from "../SettingWindow/SettingWindow"
import { StatsWindow } from "../StatsWindow/StatsWindow"
import { LevelsSelectWindow } from "../LevelsSelectWindow/LevelsSelectWindow"
import { LocalizationContext } from "@/src/localization/context/useLocalizationHookContext"
import { language } from '../../../../localization/context/useLocalizationHookContext';
import { localization } from "@/src/localization/data/localization"
import { useStatsStoreSelector } from "@/src/store/useStatsStore"
  export interface IvisibleHomeMenu {
      stats: boolean,
      setting: boolean,
      gameSelect: boolean
  }
export const HomeMenu = () => {
  const navigation = useNavigation()
  const styles = HomeMenuStyles
  const navigationTo = (url: string) => {
    navigation.navigate(url as never);
  }

  const[visible,setVisible] = useState<IvisibleHomeMenu>({
      stats: false,
      setting: false,
      gameSelect: false
  })

  const setVisibleState = (key: keyof IvisibleHomeMenu) => {
    setVisible(prev => ({
      ...prev,
      [key] : !prev[key]
    }))
  }
  const context = useContext(LocalizationContext);
  const {state} = useStatsStoreSelector()
  const language = context.language
  const headerText = localization[context.language].homeMenu.header
  const buttonProps = buttonsProps(navigationTo,setVisibleState,context?.language)
  return (
   <>

    {
      visible.setting && (
        <MenuModal 
          visible={visible.setting}
          onClose={() => setVisibleState('setting')}
        >
          <SettingWindow language={language}/>
        </MenuModal>
      ) 
    }
    {
      visible.stats && (
        <MenuModal 
          visible={visible.stats}
          onClose={() => setVisibleState('stats')}
        >
          <StatsWindow stats={state} language={language}/>
        </MenuModal>
      )
    }
    {
      visible.gameSelect && (
        <MenuModal
          visible={visible.gameSelect}
          onClose={() => setVisibleState('gameSelect')}
        >
          <LevelsSelectWindow language={language}/>
        </MenuModal>
      )
    }
     <LinearGradient
      colors={[COLORS.HomeMenuGradient.one, COLORS.HomeMenuGradient.two]}
      style={styles.container}
    >
      <HeaderMenu 
        title={headerText.title}
        subtitle={headerText.subTitle}
        titleSize={40}
        subTitleSize={20}
        marginTop={50}
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
   </>
  )
}
