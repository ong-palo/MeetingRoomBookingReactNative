import {StyleSheet, TextInput, View, Text} from "react-native";

function CustomInput({label, value, onChange, onTouchStart, readOnly}) {
    return (
        <View style={styles.rootContainer}>
            <Text style={styles.inputLabel}>{label}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChange={onChange}
                onTouchStart={onTouchStart}
                readOnly={readOnly}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        marginVertical: 5,
        marginBottom: 10
    },
    inputLabel: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24
    },
    input: {
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        height: 60,
        fontSize: 16,
    },
})

export default CustomInput