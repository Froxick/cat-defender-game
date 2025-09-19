import { GameScreen } from "@/src/components/Game/GameScreen/GameScreen";
import { useLocalSearchParams } from "expo-router";
export default function Game() {
    const params = useLocalSearchParams()
    return(
        <GameScreen params={params} />
    )
}