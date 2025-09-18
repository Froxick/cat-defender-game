import { IvisibleHomeMenu } from "./HomeMenu";

export const buttonsProps = (navigationTo : (url:string) => void,
    openModal: (key: keyof IvisibleHomeMenu) => void
) => [
    {   
        id: 1,
        title: 'Начать игру',
        navigateTo: () => openModal('gameSelect'),
        gradientColors: {
            one: '#ff7eb3',
            two: '#ff758c'
        }
    },
    {
        id: 2,
        title: 'Статистика',
        navigateTo: () => openModal('stats'),
        gradientColors: {
            one: '#7ae0ff',
            two: '#5ce1e6'
        }
    },
    {
        id: 3,
        title: 'Настройки',
        navigateTo: () => openModal('setting'),
        gradientColors: {
            one: '#ffcc67',
            two: '#ffdf7e'
        }
    }
  ]