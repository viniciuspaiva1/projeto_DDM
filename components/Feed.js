import React from 'react';
import { StyleSheet, Text, Image, View, FlatList, TouchableOpacity } from 'react-native';


export default function Feed({ navigation }){
	const feed= [
		{
			id: 1,
			tamanho: 'Açai 200ml',
			preço: 'R$ 7,00',
			src: 'https://imagenspng.com/wp-content/uploads/copo-de-acai-png-Imagem-sem-fundo.png',
		},
		{
			id: 2,
			tamanho: 'Açai 250ml',
			preço: 'R$ 8,00',
			src: 'https://imagenspng.com/wp-content/uploads/copo-de-acai-png-Imagem-sem-fundo.png',
		},
		{
			id: 3,
			tamanho: 'Açai 300ml',
			preço: 'R$ 9,00',
			src: 'https://imagenspng.com/wp-content/uploads/copo-de-acai-png-Imagem-sem-fundo.png',
		},
		{
			id: 4,
			tamanho: 'Açai 400ml',
			preço: 'R$ 10,00',
			src: 'https://imagenspng.com/wp-content/uploads/copo-de-acai-png-Imagem-sem-fundo.png',
		},
		{
			id: 5,
			tamanho: 'Açai 500ml',
			preço: 'R$ 13,00',
			src: 'https://imagenspng.com/wp-content/uploads/copo-de-acai-png-Imagem-sem-fundo.png',
		},
	];
	function renderItem({ item }){
		return <TouchableOpacity style={styles.medidas} onPress={() => navigation.navigate('CheckOrder')}>
			  <Text>{item.tamanho}</Text>
			  <Text>{item.preço}</Text>
			  <View style={styles.copos}>
				<Image source={{ uri: item.src }} style={styles.copo}/>
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
	  backgroundColor: 'grey',
	},
	medidas: {
	  backgroundColor: '#fff',
	  height: 180,
	  padding: 30,
	  flexDirection: 'row',
	  alignItems: 'center',
	  justifyContent: 'space-between',
	  marginBottom: 8,
	  marginLeft: 10,
	  marginRight: 10,
	},
	copos: {
	  alignItems: 'flex-end',
	},
	copo: {
	  height: 80,
	  width: 80,
	},
  });
