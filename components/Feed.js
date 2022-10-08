import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function Feed(){
	const [feed, setFeed] = useState();
	
	useEffect(function(){
		async function getData() {
			const response = await fetch('https://mobile.ect.ufrn.br:3000/feed');
			const feedServidor = await response.json();
			setFeed(feedServidor);
		}
		getData();
	},[])
	function renderItem({item}){
		return <View style = {styles.post}>
				<View style = {styles.postheader}>
					<View style = {styles.postheaderEsquerda}>
						<Image style = {styles.postheaderImg} source = {{uri: item.imgPerfilUri}}/>
						<Text> {item.nomeUsuario} </Text>
					</View>
					<FontAwesome5 name = "ellipsis-h" size = {16} color = "black"></FontAwesome5>
				</View>
				<Image style= {styles.postimg} aspectRatio={item.aspectRatio} source = {{uri: item.imgPostUri}}/>
				<View style = {styles.footer}>
					<FontAwesome5 style={styles.footericon} name = "heart" size = {32} color = "black"></FontAwesome5>
					<FontAwesome5 style={styles.footericon} name = "comment" size = {32} color = "black"></FontAwesome5>
					<FontAwesome5 style={styles.footericon} name = "paper-plane" size = {32} color = "black"></FontAwesome5>
				</View>
			</View>
	}
	

	return(
		<View style = {styles.feed}>
			<FlatList
				data = {feed}
				renderItem = {renderItem}
				keyExtractor = {item => item.id}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
	
}


const styles = StyleSheet.create({
  feed: {
    flex: 1,
    backgroundColor: 'white'
    
  },
  post: {
	 
	  backgroundColor: '#fff',
  },
  postheader: {
	  flexDirection: 'row',
	  height: 50,
	  alignItems: 'center',
	  justifyContent: 'space-between',
	  margin: 5,
  },
  postheaderImg: {
	  margin: 5,
	  height: 50,
	  width: 50,
	  borderRadius:25
  },
  postheaderEsquerda: {
	 flexDirection: 'row',
	 alignItems: 'center'
  },
  postimg: {
	  width: '100%',
	  height: undefined,
  },
  footer: {
    height: 60,
    backgroundColor: 'white',
    flexDirection: 'row',
	alignItems: 'center',
	
  }, 
  footericon: {
	  margin: 5,
  }
  
});
