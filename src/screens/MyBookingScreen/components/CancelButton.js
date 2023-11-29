import {Pressable, StyleSheet, Text, View} from "react-native";

function CancelButton({onPress}) {
    return (
        <View style={styles.rootContainer}>
            <Pressable style={({pressed}) => pressed && styles.pressed} onPress={onPress}>
                <Text style={styles.text}>Cancel</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        borderRadius: 10,
        backgroundColor: '#EA5C65',
        height: 40,
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 24,
        color: 'white'
    },
    pressed: {
        opacity: 0.75
    }
})

export default CancelButton