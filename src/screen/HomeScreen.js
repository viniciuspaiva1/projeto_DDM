import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import Constants from 'expo-constants';

import Header from '../components/Header';
import Feed from '../components/Feed';

export default function HomeScreen({ navigation }){
  return(
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <Header/>
      <Feed navigation={navigation}/>
    </View>
  );
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});

