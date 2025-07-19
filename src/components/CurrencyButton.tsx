import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function CurrencyButton(props: any) {
  const { name, flag, symbol, value } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          console.log('pressed');
        }}
        style={styles.buttonTouchable}
      >
        <View style={styles.button}>
          <Text style={{ fontSize: 30 }}>{flag}</Text>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTouchable: {
    borderColor: '#7155d6ff',
    borderWidth: 2,
    borderRadius: 100,
  },
  button: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
