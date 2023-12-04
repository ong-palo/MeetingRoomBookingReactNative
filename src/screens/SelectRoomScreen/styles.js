import {StyleSheet} from 'react-native';

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

export default styles;
