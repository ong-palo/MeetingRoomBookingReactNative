import React from 'react-native';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {roomsApi, useGetRoomsQuery} from '../../store/slices/api/roomsApi';
import {useEffect} from 'react';
import RoomList from './components/RoomList';
import {useDispatch, useSelector} from 'react-redux';
import {setRooms} from '../../store/slices/roomsSlice';
import PickedInfo from './components/PickedInfo';

function SelectRoom() {
  const {data, error, isLoading} = useGetRoomsQuery();
  const dispatch = useDispatch();
  const rooms = useSelector(state => state.rooms.rooms);

  const selectedDate = useSelector(state => state.newBooking.date);
  const selectedStartTime = useSelector(state => state.newBooking.startTime);
  const selectedEndTime = useSelector(state => state.newBooking.endTime);

  useEffect(() => {
    if (!isLoading && data) {
      dispatch(setRooms({rooms: data}));
    }
  }, [data, isLoading, dispatch]);

  function renderRoomList(item) {
    return <RoomList id={item.item.id} capacity={item.item.capacity} />;
  }

  return (
    <View style={styles.root}>
      <View style={styles.pickerContainer}>
        <View style={[styles.innerPickerContainer, {marginRight: 10}]}>
          <Text style={styles.title}>Date</Text>
          <PickedInfo text={selectedDate} />
        </View>
        <View style={styles.innerPickerContainer}>
          <Text style={styles.title}>Time</Text>
          <PickedInfo text={selectedStartTime + '-' + selectedEndTime} />
        </View>
      </View>
      <View style={styles.roomListContainer}>
        <Text style={styles.title}>Available Rooms</Text>
        <FlatList data={rooms} renderItem={renderRoomList} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  pickerContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 20,
  },
  innerPickerContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    // paddingRight: 10
  },
  roomListContainer: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
  },
});

export default SelectRoom;
