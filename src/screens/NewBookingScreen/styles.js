import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 20,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    marginHorizontal: 10,
  },
  inputContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  footer: {
    height: 100,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  modalContainer: {
    height: 200,
  },
  calendarStyle: {
    marginBottom: 20,
    height: 350,
  },
});

export default styles;
