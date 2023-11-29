import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import CustomInput from '../../components/CustomInput';

function LoginScreen({route, navigation}) {
  function navigateLogin() {
    return navigation.navigate('MyBookings');
  }

  return (
    <View style={styles.rootContainer}>
      <ImageBackground
        source={require('../../assets/images/meeting_room.jpg')}
        resizeMode={'cover'}
        style={styles.image}
        imageStyle={styles.imageStyle}>
        <View style={styles.innerContainer}>
          <View style={styles.topContainer}>
            {/*<Image source={require('../assets/logos/palo-logo.png')} style={styles.logo}/>*/}
            <Text style={styles.title}>Hello!{'\n'}Welcome Back</Text>
          </View>
          <View style={styles.bottomContainer}>
            <View>
              <CustomInput label={'Email'} />
              <CustomInput label={'Password'} />
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton
                text={'Login'}
                fill={true}
                onPress={navigateLogin}
                type={'primary'}
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
    marginTop: 50,
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
    marginTop: 140,
    paddingTop: 20,
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
    marginBottom: 30,
  },
});

export default LoginScreen;
