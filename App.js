import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import Swiper from 'react-native-swiper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const image = {uri: 'https://reactjs.org/logo-og.png'};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./assets/first.jpg")} resizeMode="cover" style={styles.image}>
        <Swiper showsButtons={false}>
          <View>
            <Image source={require("./assets/third.jpg")} />
          </View>
          <View>
            <Image source={require("./assets/fifth.jpg")} />
          </View>
          <View>
            <Image source={require("./assets/sixth.jpg")} />
          </View>
        </Swiper>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./assets/first.jpg")} resizeMode="cover" style={styles.image}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Register</Text>
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>Already have an account? Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./assets/first.jpg")} resizeMode="cover" style={styles.image}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Login</Text>
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OnBoarding" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    backgroundColor: 'lightgray',
    width: '100%',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
  button: {
    backgroundColor: 'mediumseagreen',
    padding: 16,
    borderRadius: 24,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
