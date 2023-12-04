import {Dimensions, StyleSheet} from 'react-native';

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  topContainer: {
    marginTop: 100,
    marginLeft: 30,
  },
  logo: {
    height: 60,
    width: 125,
  },
  image: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    lineHeight: 42,
    marginTop: 30,
    color: 'white',
  },
  bottomContainer: {
    height: deviceHeight - 400,
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 25,
    paddingHorizontal: 22,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    marginVertical: 30,
  },
  buttonContainer: {
    marginBottom: 5,
  },
});

export default styles;
