// components/CurrencyButton.tsx

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Currency } from '../constants';

interface Props extends Currency {
  isSelected?: boolean;
  onPress: () => void;
}

export default function CurrencyButton({
  flag,
  name,
  symbol,
  isSelected,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        isSelected && { borderColor: '#59ae7bff', borderWidth: 2 },
      ]}
    >
      <Text style={styles.flag}>{flag}</Text>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    backgroundColor: '#7155d6ff',
    borderRadius: 100,
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flag: { fontSize: 28 },
  name: { color: '#fff', fontWeight: 'bold', marginTop: 4 },
  symbol: { color: '#fff', marginTop: 2 },
});
