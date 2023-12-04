import {ImageBackground, Text, View} from 'react-native';
import React from 'react-native';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import CustomInput from '../../components/CustomInput/CustomInput';

import styles from './styles';

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

export default LoginScreen;
