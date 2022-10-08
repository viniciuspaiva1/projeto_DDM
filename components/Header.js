import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function Header({navigation}){
	return(
	<View style = {styles.header}>
		<Image style={styles.logo} source = {require('../assets/images/AcaiLogo.jpg')}/>
    </View>
	
	);
	
}
const styles = StyleSheet.create({

  header: {
    flexDirection: 'row',
    height: 100,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 80
  },
  logo: {
    flex: 1,
    //height: 90,
    //width:310,
    aspectRatio: 1.78,
  }  
  
});