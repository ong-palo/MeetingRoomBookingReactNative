import Modal from 'react-native-modal';
import {StyleSheet, View} from 'react-native';
import PrimaryButton from './PrimaryButton';

function BottomModal({visible, setVisible, onPress, children}) {
  return (
    <Modal
      isVisible={visible}
      style={styles.root}
      onBackdropPress={setVisible}
      backdropTransitionOutTiming={0}>
      <View style={styles.innerContainer}>
        <View>{children}</View>
        <View style={styles.footer}>
          <PrimaryButton
            onPress={onPress}
            fill={true}
            type={'primary'}
            text={'Done'}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  innerContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // height: 200,
    justifyContent: 'space-between',
    padding: 20,
  },
  footer: {
    marginBottom: 10,
  },
});

export default BottomModal;
