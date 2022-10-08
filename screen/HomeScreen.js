import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Constants from 'expo-constants';
import {FontAwesome5} from '@expo/vector-icons';

import Header from '../components/Header';


export default function HomeScreen({navigation}) {
    console.log('home', navigation)
  return (
<View style={styles.container}>
		<StatusBar style="light" />
        <Header navigation={navigation}/>

</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
  
  
});
