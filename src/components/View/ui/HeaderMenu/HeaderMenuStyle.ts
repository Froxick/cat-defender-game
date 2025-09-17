import { COLORS } from "@/src/themes/Colors";
import { StyleSheet } from "react-native";

export const HeaderMenuStyles  = (titleSize: number,
subTitleSize: number) => StyleSheet.create({
    header: {
        alignItems: 'center',
        marginTop: 50,
      },
     
      title: {
        fontSize: titleSize,
        fontWeight: 'bold',
        color: COLORS.HeaderTextColor,
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
      },
      subtitle: {
        fontSize: subTitleSize,
        color: COLORS.secondaryTextColor,
        marginTop: 5,
        fontStyle: 'italic',
      },
})