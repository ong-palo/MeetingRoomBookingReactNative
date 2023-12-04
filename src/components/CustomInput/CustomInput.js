import {TextInput, View, Text} from 'react-native';
import styles from './styles';

function CustomInput({label, value, onChange, onTouchStart, readOnly}) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChange={onChange}
        onTouchStart={onTouchStart}
        readOnly={readOnly}
      />
    </View>
  );
}

export default CustomInput;
