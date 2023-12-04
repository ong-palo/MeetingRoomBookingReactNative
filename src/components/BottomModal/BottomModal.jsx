import Modal from 'react-native-modal';
import {View} from 'react-native';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

import styles from './styles';

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

export default BottomModal;
