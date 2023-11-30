import React from 'react-native';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';

function Welcome({route, navigation}) {
  function navigateLogin() {
    return navigation.navigate('Login');
  }

  return (
    <View style={styles.rootContainer} testID="landing_page">
      <ImageBackground
        source={require('../../assets/images/meeting_room.jpg')}
        resizeMode={'cover'}
        style={styles.image}
        imageStyle={styles.imageStyle}>
        <View style={styles.innerContainer}>
          <View style={styles.topContainer}>
            <Image
              source={require('../../assets/logos/palo-logo.png')}
              style={styles.logo}
            />
            <Text style={styles.title}>Meeting{'\n'}Room Booking</Text>
          </View>
          <View style={styles.bottomContainer}>
            <View>
              <Text style={styles.text}>
                Let's make meeting room booking easier. {'\n\n'}Meeting Room
                Booking will help you to ensure you will have a room for your
                meeting. Manage reservation, cancellation. ongoing or finished
                booking.{' '}
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton
                text={'Login'}
                fill={true}
                onPress={navigateLogin}
                type={'primary'}
                testID="login"
              />
              <PrimaryButton
                text={'Sign Up'}
                fill={false}
                onPress={navigateLogin}
                type={'primary'}
                testID="sign_up"
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

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

export default Welcome;
