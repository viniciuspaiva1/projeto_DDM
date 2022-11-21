import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, FlatList, TouchableOpacity, CheckBox} from 'react-native';


export default function Feed({ navigation }){
	const [feed, setFeed] = useState([]);
	const [click, setClick] = useState(false);
	

	useEffect(()=>{
		async function getData(){
			const response = await fetch('https://raw.githubusercontent.com/viniciuspaiva1/JSON-Fake/main/ingredientes.JSON');
			const checkServidor = await response.json();
			setFeed(checkServidor);
		}
		getData();
	},[])
	
	

	function renderItem({ item }){
		return <View style = {styles.divFlex}>
				<View style = {styles.div1}> 
					<Text style = {styles.titulo}>{item.titulo1}</Text>
					{
						
						item.cremes.map((creme,idx) => <TouchableOpacity 
						style ={click ? styles.divClicked : styles.div2}
						onPress = {()=>{
							setClick(!click);
							console.log(click);
							
						}}>
							<Text style = {styles.ingrediente}>{creme}</Text>
							<Text style = {styles.ingrediente}>"-   +"</Text>
						</TouchableOpacity>)
						
						
					}
				</View>
				<View style = {styles.div1}>
					<Text style = {styles.titulo}>{item.titulo2}</Text>
					{
						item.recheios.map((recheio,idx) => <TouchableOpacity style = {styles.div2}>
						<Text style = {styles.ingrediente}>{recheio}</Text>
						<Text style = {styles.ingrediente}>"-   +"</Text>
					</TouchableOpacity>)
					}
				</View>
				
			</View>
		   
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
	  backgroundColor: 'gray',
	  justifyContent: "space-between"
	},
	selectBox:{
		height: 160,
		padding: 8
	},
	divFlex:{
		flex: 1,
		flexDirection: "column",
		justifyContent: 'space-between',
		padding: 10,
		backgroundColor: "white"
	},
	div1: {
		flexDirection: "column",
		backgroundColor: "#faf0e6",
		justifyContent: 'space-between',
		marginTop: 5,
		padding: 5,
		paddingTop: 30,
		borderRadius: 5,
	},
	divClicked: {
		width: 360,
		padding: 15,
		margin: 5,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#90EE90",
		borderRadius: 5
	},
	div2: {
		width: 360,
		padding: 15,
		margin: 5,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#B0E0E6",
		borderRadius: 5
	},
	titulo: {
		fontSize: 30,
		fontStyle:"italic",
		fontWeight: "bold"
	},
	
	ingrediente: {
	  fontSize: 20
	},
  });
