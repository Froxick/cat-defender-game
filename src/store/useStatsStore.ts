import { create, StateCreator } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useShallow } from 'zustand/shallow'




interface initialState {
    resultEasy: number,
    resultMedium: number,
    resultHard: number
}
interface iActions {
    setResult : (key: keyof initialState, data: number) => void
}

interface IUseStatsStore extends initialState, iActions {}
export interface statsKey {
    resultEasy: number,
    resultMedium: number,
    resultHard: number
}
const initialState : initialState = {
    resultEasy: 0,
    resultHard: 0,
    resultMedium: 0
}

const statsStore : StateCreator<IUseStatsStore> = (set) =>({
    ...initialState,
    setResult: (key: keyof initialState, data: number) => set((state) => ({
        [key] : data
    }))
})


export const useStatsStore = create<IUseStatsStore> () (
    persist(statsStore,
        {
            name: 'stats-storage',
            storage: createJSONStorage(() => AsyncStorage),
            partialize: (state) => ({
                resultEasy: state.resultEasy,
                resultHard: state.resultHard,
                resultMedium: state.resultMedium
            })
        }
    )
)

export const useStatsStoreSelector = () => {
    const {resultEasy,resultMedium,resultHard} = useStatsStore(
        useShallow((state) => ({
            resultEasy: state.resultEasy,
            resultHard: state.resultHard,
            resultMedium: state.resultMedium
        }))
    )
    const {setResult} = useStatsStore.getState()

    return {
        state: {
            resultEasy,
            resultMedium,
            resultHard
        },
        actions: {
            setResult
        }
    }
}