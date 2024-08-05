import React from 'react';
import { Button as PaperButton, useTheme } from 'react-native-paper';

const Button = ({ title, onPress }) => {
  const { colors } = useTheme();

  return (
    <PaperButton
      mode="contained"
      onPress={onPress}
      style={{ backgroundColor: colors.primary }}
    >
      {title}
    </PaperButton>
  );
};

export default Button;
