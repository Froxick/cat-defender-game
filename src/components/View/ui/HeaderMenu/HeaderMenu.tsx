import { Text, View } from "react-native"
import { HeaderMenuStyles } from "./HeaderMenuStyle"
interface HeaderMenuProps {
    title: string,
    subtitle: string,
    titleSize: number,
    subTitleSize: number,
    marginTop: number
}
export const HeaderMenu = ({...props} : HeaderMenuProps) => {
    const styles = HeaderMenuStyles(props.titleSize,props.subTitleSize,props.marginTop)
    return(
        <View style={styles.header}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.subtitle}>{props.subtitle}</Text>
        </View>
    )
}