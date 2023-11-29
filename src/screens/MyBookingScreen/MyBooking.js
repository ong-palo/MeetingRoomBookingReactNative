import React from 'react-native';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import BookingDetailList from './components/BookingDetailList';
import CancelModal from './components/CancelModal';
import {useDispatch, useSelector} from 'react-redux';
import {setCancelModalVisibility} from '../../store/slices/myBookingSlice';
import PrimaryButton from '../../components/PrimaryButton';

function MyBooking({route, navigation}) {
  // const myBookingContext = useContext(MyBookingContext);
  const myBookings = useSelector(state => state.myBookings.myBookings);
  const dispatch = useDispatch();

  const reservedBookings = myBookings.filter(
    booking => booking.status === 'reserved',
  ); // BOOKINGS.filter((booking) => booking.status === 'reserved');
  const cancelledBookings = myBookings.filter(
    booking => booking.status === 'cancelled',
  ); // BOOKINGS.filter((booking) => booking.status === 'cancelled');
  const completedBookings = myBookings.filter(
    booking => booking.status === 'completed',
  ); // BOOKINGS.filter((booking) => booking.status === 'completed')

  function modalHandler() {
    dispatch(setCancelModalVisibility());
  }

  function newBookingHandler() {
    return navigation.navigate('NewBooking');
  }

  return (
    <View style={styles.rootContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Text style={styles.sectionTitle}>Reserved</Text>
          <BookingDetailList data={reservedBookings} />
        </View>
        <View>
          <Text style={styles.sectionTitle}>Cancelled</Text>
          <BookingDetailList data={cancelledBookings} />
        </View>
        <View>
          <Text style={styles.sectionTitle}>Completed</Text>
          <BookingDetailList data={completedBookings} />
        </View>
      </ScrollView>
      {/*<View style={styles.modal}>*/}
      <CancelModal setVisible={modalHandler} />
      {/*</View>*/}
      <View style={styles.footer}>
        {/*<Text>Sticky Footer</Text>*/}
        <PrimaryButton
          text="Make new booking"
          fill={true}
          type={'primary'}
          onPress={newBookingHandler}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // padding: 20,
    // margin: 20
  },
  container: {
    paddingBottom: 20,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
  },
  footer: {
    height: 120,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});

export default MyBooking;
