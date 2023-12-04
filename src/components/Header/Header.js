import {View, Text, ImageBackground} from 'react-native';

import styles from './styles';

function Header({text}) {
  return (
    <View style={styles.headerContainer}>
      <ImageBackground
        source={require('../../assets/images/app_bar_cover.jpg')}
        resizeMode={'cover'}
        style={styles.image}
        imageStyle={styles.imageStyle}>
        <View style={styles.innerContainer}>
          <Text style={styles.headerTitle}>{text}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Header;
