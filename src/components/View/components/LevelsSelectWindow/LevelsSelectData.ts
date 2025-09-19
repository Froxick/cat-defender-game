import { language } from "@/src/localization/context/useLocalizationHookContext"
import { localization } from "@/src/localization/data/localization"

interface LevelsSelectData {
    title: string,
    description: string,
    gradientColors: {
        one: string,
        two: string
    },
    id: number
}


export const LevelsSelectData = (language: language): LevelsSelectData[] => {
    const text = localization[language].homeMenu.menuModal.buttons
    return(
        [
            {
                title: text.easy,
                description: text.descriptionButtons.easy,
                gradientColors: {
                    one: '#7aff7cff',
                    two: '#13a02dff'
                },
                id: 1
            },
            {
                title:  text.medium,
                description: text.descriptionButtons.medium,
                gradientColors: {
                    one: '#ffd000ff',
                    two: '#a28b14ff'
                },
                id: 2
            },
            {
                title: text.hard,
                description: text.descriptionButtons.hard,
                gradientColors: {
                    one: '#ff7ea3ff',
                    two: '#ff7575ff'
                },
                id: 3
            },
        ]
    )
}