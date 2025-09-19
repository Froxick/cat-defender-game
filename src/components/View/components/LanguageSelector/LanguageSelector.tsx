import { LocalizationContext } from '@/src/localization/context/useLocalizationHookContext';
import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { LanguageSelectorStyles } from './LanguageSelectorStyle';




export const LanguageSelector = () => {
    const styles = LanguageSelectorStyles
  const { language, setLenguage } = useContext(LocalizationContext)
  const [animation] = useState(new Animated.Value(language === 'ru' ? 0 : 1));

  const handleLanguageChange = (newLanguage: 'ru' | 'en') => {
    if (newLanguage !== language) {
      
      Animated.timing(animation, {
        toValue: newLanguage === 'ru' ? 0 : 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
      
        setLenguage(newLanguage);
    }
  };


  return (
    <View style={styles.container}>
     
      <View style={styles.selectorContainer}>
        <TouchableOpacity 
          style={[styles.option,styles.option_1 ,language === 'ru' && styles.activeOption]}
          onPress={() => handleLanguageChange('ru')}
        >
          <Text style={[styles.optionText, language === 'ru' && styles.activeOptionText]}>
            Русский
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.option,styles.option_2, language === 'en' && styles.activeOption]}
          onPress={() => handleLanguageChange('en')}
        >
          <Text style={[styles.optionText, language === 'en' && styles.activeOptionText]}>
            English
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



