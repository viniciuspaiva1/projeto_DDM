import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';
import Constants from 'expo-constants';

import Header from '../components/Header';
import CheckMake from '../components/CheckMake'

export default function CheckOrder({ navigation }){
  return(
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <Header/>
      <CheckMake navigation={navigation}/>
    </View>
  );
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
  }
});

