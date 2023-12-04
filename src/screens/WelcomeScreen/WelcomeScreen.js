import React from 'react-native';
import {Image, ImageBackground, Text, View} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';

import styles from './styles';

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

export default Welcome;
