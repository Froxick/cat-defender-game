import { language } from "@/src/localization/context/useLocalizationHookContext";
import { IvisibleHomeMenu } from "./HomeMenu";
import { localization } from "@/src/localization/data/localization";

export const buttonsProps = (navigationTo : (url:string) => void,
    openModal: (key: keyof IvisibleHomeMenu) => void, language: language
) =>{
    const text = localization[language].homeMenu.buttons
    return (
         [
            {   
                id: 1,
                title: text.GameSelect,
                navigateTo: () => openModal('gameSelect'),
                gradientColors: {
                    one: '#ff7eb3',
                    two: '#ff758c'
                }
            },
            {
                id: 2,
                title: text.GameStats,
                navigateTo: () => openModal('stats'),
                gradientColors: {
                    one: '#7ae0ff',
                    two: '#5ce1e6'
                }
            },
            {
                id: 3,
                title: text.GameSetting,
                navigateTo: () => openModal('setting'),
                gradientColors: {
                    one: '#ffcc67',
                    two: '#ffdf7e'
                }
            }
        ]
    )
}