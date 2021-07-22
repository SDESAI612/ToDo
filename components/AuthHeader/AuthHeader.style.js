import { StyleSheet } from "react-native";
import colors from '../../config/colors'

const styles = StyleSheet.create({
    header: {
        height: "30%",
        width: "100%",
        backgroundColor: colors.colorPrimaryDark,
        alignItems: 'center',
        justifyContent: 'center'
    },
    userIcon: {
        height: '50%',
        width: '50%',
        resizeMode: 'contain',
        tintColor: colors.white
    },
})

export default styles;