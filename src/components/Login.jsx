import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implementasi logika autentikasi di sini
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput
        placeholder="Masukkan email Anda"
        value={email}
        onChangeText={setEmail}
      />
      <Text>Password:</Text>
      <TextInput
        placeholder="Masukkan password Anda"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
