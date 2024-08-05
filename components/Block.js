import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

const Block = ({ title, children }) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.block, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.primary }]}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Block;
