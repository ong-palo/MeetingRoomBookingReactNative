import React from 'react-native';
import {Alert, StyleSheet, Text, View} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import {useState} from 'react';
import BottomModal from '../../components/BottomModal/BottomModal';
import NumberOfGuests from './components/NumberOfGuests';
import {Calendar} from 'react-native-calendars';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {useDispatch, useSelector} from 'react-redux';
import {
  decreasesGuests,
  increaseGuests,
  setDate,
  setStartTime,
  setEndTime,
} from '../../store/slices/newBookingSlice';
import {faCalendarCheck} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import styles from './styles';

function NewBooking({route, navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState('');

  const guests = useSelector(state => state.newBooking.guests);
  const currentDate = useSelector(state => state.newBooking.date);
  const startTime = useSelector(state => state.newBooking.startTime);
  const endTime = useSelector(state => state.newBooking.endTime);

  const [startTimeState, setStartTimeState] = useState(new Date());
  const [endTimeState, setEndTimeState] = useState(new Date());

  const dispatch = useDispatch();
  function handleSelectRoom() {
    if (guests === 0 || !currentDate || !startTime || !endTime) {
      return Alert.alert('Please input all information.');
    }
    return navigation.navigate('SelectRoom');
  }

  function handleModal(type) {
    setModalType(type);
    setModalVisible(!modalVisible);
  }

  function handleDateChange(date) {
    dispatch(setDate({date: date.dateString}));
  }

  function handleStartTimeChange(date) {
    const time = `${date.getHours()}:${date.getMinutes()}`;
    dispatch(setStartTime({startTime: time}));
  }

  function handleEndTimeChange(date) {
    const time = `${date.getHours()}:${date.getMinutes()}`;
    dispatch(setEndTime({endTime: time}));
  }

  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        {/*<FontAwesome5 name={'calendar-check'} size={24} color={'black'} />*/}
        <FontAwesomeIcon icon={faCalendarCheck} size={24} color={'black'} />
        <Text style={styles.titleText}>My Bookings</Text>
      </View>
      <View style={styles.inputContainer}>
        <CustomInput
          label="Number of Guests"
          onTouchStart={() => handleModal('guest')}
          value={guests.toString()}
          readOnly={true}
        />
        <CustomInput
          label="Date"
          onTouchStart={() => handleModal('date')}
          readOnly={true}
          value={currentDate}
        />
        <CustomInput
          label="Start Time"
          onTouchStart={() => handleModal('startAt')}
          readOnly={true}
          value={startTime}
        />
        <CustomInput
          label="End Time"
          onTouchStart={() => handleModal('endAt')}
          readOnly={true}
          value={endTime}
        />
      </View>
      <View style={styles.footer}>
        <PrimaryButton
          text="Find Room"
          type={'primary'}
          fill={true}
          onPress={handleSelectRoom}
        />
      </View>
      <BottomModal
        visible={modalVisible}
        setVisible={handleModal}
        onPress={handleModal}>
        {modalType === 'guest' && (
          <NumberOfGuests
            guests={guests}
            decrease={() => dispatch(decreasesGuests())}
            increase={() => dispatch(increaseGuests())}
          />
        )}
        {modalType === 'date' && (
          <Calendar
            onDayPress={date => handleDateChange(date)}
            current={currentDate}
            style={styles.calendarStyle}
            markedDates={{
              [currentDate]: {selected: true},
            }}
          />
        )}
        {modalType === 'startAt' && (
          <RNDateTimePicker
            mode={'time'}
            display={'spinner'}
            value={startTimeState}
            onChange={(event, date) => handleStartTimeChange(date)}
          />
        )}
        {modalType === 'endAt' && (
          <RNDateTimePicker
            mode={'time'}
            display={'spinner'}
            value={endTimeState}
            onChange={(event, date) => handleEndTimeChange(date)}
          />
        )}
      </BottomModal>
    </View>
  );
}

export default NewBooking;
