import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Questions from './screens/Questions';
import Result from './screens/Result';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
<> 
  <View style={styles.header}>
    <Text style={styles.headerText}>QUIZ APP</Text>
  </View>

  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="Questions" component={Questions} options={{headerShown:false}}/>
      <Stack.Screen name="Result" component={Result} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
</>
  );
}

const styles = StyleSheet.create({
  header:{
    height:54,
    width:375,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#0F0E0E",
  },
  headerText:{
    color:"#E0EBEE",
    fontWeight:"bold",
    fontSize:24,
  },
});
