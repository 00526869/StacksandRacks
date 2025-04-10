import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Alert,
} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const API_BASE_URL = 'http://192.168.0.178:8080/api/users'; // Replace with your backend IP

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!email || !password) {
      Alert.alert('All fields are required');
      return;
    }

    axios.post(`${API_BASE_URL}/register`, { email, password })
      .then((res) => {
        if (res.data === 'User registered') {
          Alert.alert('Success', 'Account created! Please log in.');
          navigation.navigate('Login');
        } else {
          Alert.alert('Error', res.data);
        }
      })
      .catch((err) => {
        console.error(err);
        Alert.alert('Error creating account');
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.buttonPrimary} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#f2f2f2' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 12, borderRadius: 8, marginBottom: 15 },
  buttonPrimary: { backgroundColor: '#28a745', padding: 15, borderRadius: 8 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 16 },
});
