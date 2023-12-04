import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonOuterContainer: {
    marginVertical: 5,
    height: 75,
    borderRadius: 10,
    borderWidth: 1,
    // backgroundColor: '#5CC99B',
    // borderColor: '#5CC99B',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.65,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
  },
});

export default styles;
