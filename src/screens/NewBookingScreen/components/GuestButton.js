import {Pressable, StyleSheet, Text, View} from "react-native";
import {Colors} from "../../../utils/colors";

function GuestButton({text, onPress, disabled}) {
    return (
        <View style={disabled ? styles.disabledContainer : styles.container}>
            <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
                <Text style={disabled ? styles.disabledText : styles.text}>{text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: Colors.primaryGreen,
        width: 35,
        height: 35,
        justifyContent: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
        alignSelf: 'center',
        color: 'white'
    },
    pressed: {
        opacity: 0.75
    },
    disabledContainer: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.disabledGrey,
        backgroundColor: 'white',
        width: 35,
        height: 35,
        justifyContent: 'center'
    },
    disabledText: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
        alignSelf: 'center',
        color: Colors.disabledGrey
    }
})

export default GuestButton