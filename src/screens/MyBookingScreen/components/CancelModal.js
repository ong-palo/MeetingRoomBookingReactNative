import React from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import {setCancelModalVisibility} from '../../../store/slices/myBookingSlice';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

function CancelModal() {
  // const myBookingContext = useContext(MyBookingContext);
  const cancelModalVisible = useSelector(
    state => state.myBookings.cancelModalVisibility,
  );
  const dispatch = useDispatch();

  return (
    <Modal
      isVisible={cancelModalVisible}
      onRequestClose={() => dispatch(setCancelModalVisibility())}
      transparent={true}
      onBackdropPress={() => dispatch(setCancelModalVisibility())}
      backdropTransitionOutTiming={0}>
      <View style={styles.rootContainer}>
        <Text style={styles.title}>Cancel Booking</Text>
        <Text style={styles.text}>Booking No.</Text>
        <Text style={styles.text}>
          If you cancel this booking, you will lose your reservation
        </Text>
        <Text style={styles.text}>
          Are you sure you want to cancel your booking?
        </Text>
        <View>
          <PrimaryButton text={'No, keep my booking'} type={'warning'} />
          <PrimaryButton
            text={'Yes, cancel my booking'}
            fill={true}
            type={'warning'}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    height: 485,
    padding: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    lineHeight: 42,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
});

export default CancelModal;
