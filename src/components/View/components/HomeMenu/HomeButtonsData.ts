export const buttonsProps = (navigationTo : (url:string) => void) => [
    {   
        id: 1,
        title: 'Начать игру',
        navigateTo: () => navigationTo('Game'),
        gradientColors: {
            one: '#ff7eb3',
            two: '#ff758c'
        }
    },
    {
        id: 2,
        title: 'Статистика',
        navigateTo: () => navigationTo('Stats'),
        gradientColors: {
            one: '#7ae0ff',
            two: '#5ce1e6'
        }
    },
    {
        id: 3,
        title: 'Настройки',
        navigateTo: () => navigationTo('Setting'),
        gradientColors: {
            one: '#ffcc67',
            two: '#ffdf7e'
        }
    }
  ]