import React from 'react';

import { StyleSheet, Image, View } from 'react-native';

export default function Header({ }){
	return(
    <View style={styles.header}>
    <Image style={styles.logo} source={require('../../assets/images/AcaiLogo.jpg')}/>
  </View>
	);	
}

const styles= StyleSheet.create({  
  header: {
    height: 130,
  },
  logo: {
    flex: 1,
    aspectRatio: 3.15,
  },
});