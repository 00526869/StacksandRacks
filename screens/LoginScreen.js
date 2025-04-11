import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, SafeAreaView, Alert
} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const API_BASE_URL = 'http://192.168.0.178:8081/api/users';

export default function LoginScreen({ onLoginSuccess }) {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${API_BASE_URL}/login`, { email, password });
      if (res.data === 'Login successful') {
        onLoginSuccess(); // Unlock tabs
      } else {
        Alert.alert('Login Failed', res.data);
      }
    } catch (err) {
      console.error('Login Error:', err.message);
      Alert.alert('Error logging in', err.response?.data || err.message);
    }
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
        placeholderTextColor="#ccc" 
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#ccc" 
        onChangeText={setPassword}
        value={password}
        secureTextEntry
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
    backgroundColor: '#1e1e1e', // dark grey
    paddingHorizontal: 20,
    justifyContent: 'center'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 40
  },
  input: {
    height: 50,
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    borderColor: '#555',
    borderWidth: 1
  },
  buttonPrimary: {
    backgroundColor: '#007bff',
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 10
  },
  buttonSecondary: {
    backgroundColor: '#28a745',
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});


