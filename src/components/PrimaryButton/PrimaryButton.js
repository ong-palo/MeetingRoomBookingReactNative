import React from 'react-native';
import {Pressable, Text, View} from 'react-native';
import {Colors} from '../../utils/colors';

import styles from './styles';

function PrimaryButton({text, fill, onPress, type, testID}) {
  let mainColor;

  if (type === 'primary') {
    mainColor = Colors.primaryGreen;
  } else if (type === 'warning') {
    mainColor = Colors.warningRed;
  }

  const fillStyleContainer = {
    backgroundColor: mainColor,
    borderColor: mainColor,
  };

  const fillStyleText = {
    color: 'white',
  };

  const outlineStyleContainer = {
    borderColor: mainColor,
  };

  const outlineStyleText = {
    color: mainColor,
  };

  const containerStyle = [
    styles.buttonOuterContainer,
    fill ? fillStyleContainer : outlineStyleContainer,
  ];
  const textStyle = [styles.text, fill ? fillStyleText : outlineStyleText];

  return (
    <View style={containerStyle} testID={testID}>
      <Pressable
        onPress={onPress}
        style={({pressed}) =>
          pressed ? [containerStyle, styles.pressed] : containerStyle
        }>
        <Text style={textStyle}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;
