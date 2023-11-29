import React from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import dayjs from 'dayjs';
import CancelButton from './CancelButton';
import {useDispatch} from 'react-redux';
import {setCancelModalVisibility} from '../../../store/slices/myBookingSlice';

function BookingDetail({bookingNo, roomNo, maxGuest, startAt, endAt, status}) {
  // const myBookingContext = useContext(MyBookingContext);
  const dispatch = useDispatch();

  const cancellableHeight = {
    height: 193,
  };

  function formatTime(time) {
    return dayjs(time).format('hh:mm A');
  }

  return (
    <View
      style={
        status === 'reserved'
          ? [styles.rootContainer, cancellableHeight]
          : styles.rootContainer
      }>
      <Text style={styles.title}>Booking No. {bookingNo}</Text>
      <View style={styles.detailRow}>
        <Text style={styles.detailText}>Room No. {roomNo}</Text>
        <Text style={styles.detailText}>{maxGuest} Guests Max</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.detailText}>{dayjs().format('DD/MM/YY')}</Text>
        <Text style={styles.detailText}>
          {formatTime(startAt)} - {formatTime(endAt)}
        </Text>
      </View>
      {status === 'reserved' ? (
        <CancelButton onPress={() => dispatch(setCancelModalVisibility())} />
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    height: 130,
    // padding: 20,
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 15,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    marginBottom: 15,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  detailText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
});

export default BookingDetail;
