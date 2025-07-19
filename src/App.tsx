import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
} from 'react-native';
import React from 'react';

import { currencyByRupee } from './constants';
import CurrencyButton from './components/CurrencyButton';

export default function App() {
  const [input, setInput] = React.useState('');
  const [selected, setSelected] = React.useState<Currency | null>(null);
  const [output, setOutput] = React.useState('');
  const [error, setError] = React.useState('');

  const handleChangeInput = (text: string) => {
    setError('');
    setOutput('');
    setInput(text);
  };

  const handleSelectCurrency = (currency: Currency) => {
    setSelected(currency);
    setOutput('');
    setError('');
  };

  const handleConvert = () => {
    Keyboard.dismiss();
    if (!input) {
      setError('Please enter the amount in Rupees');
      return;
    }
    if (!selected) {
      setError('Please select a target currency');
      return;
    }

    const amount = Number(input);
    if (isNaN(amount)) {
      setError('Invalid number');
      return;
    }

    const converted = (amount * selected.value).toFixed(2);
    setOutput(`₹ ${amount} = ${selected.symbol} ${converted} 🤑🤑`);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#250d7aff' }}>
      <View style={styles.container}>
        <View style={styles.statusBarContainer}>
          <StatusBar barStyle={'light-content'} />
        </View>
        <View style={styles.subcontainer}>
          <View style={styles.title}>
            <Text style={styles.titleText}>Currency Converter</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Input</Text>
            <View style={styles.inputBox}>
              <TextInput
                placeholder="Enter the amount in Rupees"
                inputMode="numeric"
                defaultValue={input}
                onChangeText={text => handleChangeInput(text)}
                style={styles.input}
                maxLength={10}
              />
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={() => handleConvert()}>
                  Convert
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.title}>
            <Text style={styles.titleText}>Currency</Text>
          </View>
          <View style={styles.currencyContainer}>
            <View style={styles.flatList}>
              {currencyByRupee.map(c => (
                <CurrencyButton
                  key={c.name}
                  {...c}
                  isSelected={selected?.name === c.name}
                  onPress={() => handleSelectCurrency(c)}
                />
              ))}
            </View>
          </View>
          {error.length > 0 && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>Error</Text>
              <Text style={styles.error}>{error}</Text>
            </View>
          )}
          {output.length > 0 && (
            <View style={styles.outputContainer}>
              <Text style={styles.outputText}>Output</Text>
              <Text style={styles.output}>{output}</Text>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  statusBarContainer: {
    backgroundColor: '#7155d6ff',
    height: StatusBar.currentHeight,
  },
  container: {
    backgroundColor: '#250d7aff',
  },
  subcontainer: {
    padding: 10,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  currencyContainer: {},
  flatList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  inputContainer: {
    gap: 15,
    padding: 10,
  },
  inputText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  inputBox: {
    flexDirection: 'row',
    gap: 10,
  },
  input: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#7155d6ff',
    padding: 10,
    borderRadius: 10,
    flex: 1,
  },
  button: {
    backgroundColor: '#7155d6ff',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  errorContainer: {
    padding: 10,
  },
  errorText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  error: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#c13636ff',
  },
  outputContainer: {
    padding: 10,
  },
  outputText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  output: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#59ae7bff',
  },
});
