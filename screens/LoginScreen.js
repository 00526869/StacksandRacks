import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';

import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const API_BASE_URL = 'http://192.168.0.178:8080/api/users'; // Replace with your backend IP

export default function LoginScreen({ onLoginSuccess }) {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios
      .post(`${API_BASE_URL}/login`, { email, password })
      .then((res) => {
        if (res.data === 'Login successful') {
          onLoginSuccess(); // 👈 Notifies App.js to unlock the tab screens
        } else {
          Alert.alert('Login Failed', res.data);
        }
      })
      .catch((err) => {
        console.error('Login Error:', err);
        Alert.alert('Error logging in');
      });
  };

  const handleCreateAccount = () => {
    navigation.navigate('Register');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to Stacks & Racks</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />

      <TouchableOpacity style={styles.buttonPrimary} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSecondary} onPress={handleCreateAccount}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  buttonPrimary: {
    backgroundColor: '#007bff',
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonSecondary: {
    backgroundColor: '#28a745',
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
