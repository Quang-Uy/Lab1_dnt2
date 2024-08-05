import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegistrationScreen from './components/RegistrationScreen';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <RegistrationScreen />
    </View>
  );
}

