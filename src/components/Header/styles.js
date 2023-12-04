import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    height: 120,
    width: '100%',
    // borderRadius: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: 'white',
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowColor: 'black',
  },
  image: {
    flex: 1,
  },
  imageStyle: {
    overflow: 'hidden',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '600',
    lineHeight: 42,
    marginBottom: 15,
    marginLeft: 15,
    color: 'white',
  },
});

export default styles;
