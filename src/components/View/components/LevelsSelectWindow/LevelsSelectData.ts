interface LevelsSelectData {
    title: string,
    description: string,
    gradientColors: {
        one: string,
        two: string
    },
    id: number
}


export const LevelsSelectData: LevelsSelectData[] = [
    {
        title: 'Легкая',
        description: 'Оптимальна для новичков \n враги медленные и их мало',
        gradientColors: {
            one: '#7aff7cff',
            two: '#13a02dff'
        },
        id: 1
    },
     {
        title: 'Средняя',
        description: 'Для скиловых игроков \n враги быстрее и их больше',
        gradientColors: {
            one: '#ffd000ff',
            two: '#a28b14ff'
        },
        id: 2
    },
     {
        title: 'Сложная',
        description: 'Для тех кто любит хардкор \n враги быстрые и их очень много',
        gradientColors: {
            one: '#ff7ea3ff',
            two: '#ff7575ff'
        },
        id: 3
    },
]