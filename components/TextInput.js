import React from 'react';
import { TextInput as PaperTextInput, useTheme } from 'react-native-paper';

const TextInput = ({ label, value, onChangeText, secureTextEntry }) => {
  const { colors } = useTheme();

  return (
    <PaperTextInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      style={{ backgroundColor: colors.surface }}
      theme={{ colors: { text: colors.onSurface, primary: colors.primary } }}
    />
  );
};

export default TextInput;
