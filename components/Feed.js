import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, FlatList, TouchableOpacity } from 'react-native';


export default function Feed({ navigation }){
	const [feed, setFeed] = useState([]);
	useEffect(()=>{
		async function getData(){
			const response = await fetch('https://raw.githubusercontent.com/viniciuspaiva1/JSON-Fake/main/produtosFeed.JSON');
			const feedServidor = await response.json();
			setFeed(feedServidor);
		}
		getData();
	},[])
	
	function renderItem({ item }){
		return <TouchableOpacity style = {styles.selectBox} onPress={() => navigation.navigate('CheckOrder')}>
			  <View style={styles.divFlex}>
				<View style = {styles.div1}>
					<Text>{item.nomeProduto}</Text>
					<Text>{item.detalhe}</Text>
				</View>
				<View style = {styles.div2}>
					<Text>{item.preco}</Text>
					<Image style={styles.imagem} source={{ uri: item.imgProduto }} />
				</View>
			  </View>
		   </TouchableOpacity>
		   
	}
	return(
		<View style={styles.feed}>
			<FlatList
				data={feed}
				renderItem={renderItem}
				keyExtractor={item => item.id}
			/>
      	</View>
	);
}

const styles= StyleSheet.create({	
	feed: {
	  flex: 1,
	  backgroundColor: 'white',
	  justifyContent: "space-between"
	},
	selectBox:{
		height: 160,
		padding: 8
	},
	divFlex:{
		flex: 1,
		flexDirection: "row",
		justifyContent: 'space-between',
		padding: 10,
		backgroundColor: "#B0E0E6",
		borderRadius: 5,
	},
	div1: {
		flexDirection: "column",
		alignItems: "flex-start",
		marginTop: 10,
		padding: 5,
		paddingTop: 30,
	},
	div2: {
		width: 160,
		padding: 5,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},

	imagem: {
	  height: 80,
	  width: 80,
	},
  });
