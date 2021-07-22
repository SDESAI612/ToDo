import { StyleSheet } from "react-native";
import colors from '../../config/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        marginEnd: 32,
        marginStart: 32,
        paddingTop: 64,
        marginBottom: 32
    },
    emailText: {
        fontSize: 16,
        color: colors.colorPrimaryDark,
    },
    forgotPassText: {
        marginBottom: 16,
        marginTop: 16,
        alignSelf: 'center'
    },
    footerView: {
        marginBottom: 16,
        marginTop: 16,
        alignSelf: 'center',
        flexDirection:'row'
    }
})

export default styles;