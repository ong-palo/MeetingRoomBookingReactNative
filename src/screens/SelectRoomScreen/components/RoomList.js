import React from 'react-native';
import {StyleSheet, Text, View} from 'react-native';

function RoomList({id, capacity}) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.roomText}>Room {id}</Text>
        <Text style={styles.guestText}>{capacity} Guests max</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    height: 75,
    justifyContent: 'center',
    marginVertical: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  roomText: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 30,
    alignSelf: 'center',
  },
  guestText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    alignSelf: 'center',
  },
});

export default RoomList;
