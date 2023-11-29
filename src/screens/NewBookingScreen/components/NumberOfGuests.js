import {Button, StyleSheet, Text, View} from "react-native";
import {useEffect, useState} from "react";
import GuestButton from "./GuestButton";

function NumberOfGuests({guests, decrease, increase}) {
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if (guests <= 0) {
            setDisabled(true)
        } else {
            setDisabled(false);
        }
    }, [guests]);

    return (
        <View style={styles.root}>
            <View>
                <Text style={styles.text}>Number of guests</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <GuestButton text={'-'} disabled={disabled} onPress={decrease}/>
                <Text style={[styles.text, {marginHorizontal: 15}]}>{guests}</Text>
                <GuestButton text={'+'} onPress={increase}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        alignItems: 'center'
    }
})

export default NumberOfGuests