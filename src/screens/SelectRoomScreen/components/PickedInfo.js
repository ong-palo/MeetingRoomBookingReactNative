import React from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../../utils/colors';

function PickedInfo({text}) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: Colors.primaryGreen,
  },
  innerContainer: {
    padding: 10,
    height: 45,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: 'white',
    alignSelf: 'center',
  },
});

export default PickedInfo;
