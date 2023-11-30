import React from 'react-native';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../utils/colors';

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

export default PrimaryButton;
