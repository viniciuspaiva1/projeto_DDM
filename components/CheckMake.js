import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, FlatList, TouchableOpacity, CheckBox} from 'react-native';


export default function Feed({ navigation }){
	const [feed, setFeed] = useState([]);
	
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
					<View style = {styles.div2}>
						<Text style = {styles.ingrediente}>{item.cremes[0]}</Text>
						<Text style = {styles.ingrediente}>"-   +"</Text>
					</View>
					<View style = {styles.div2}>
						<Text style = {styles.ingrediente}>{item.cremes[1]}</Text>
						<Text style = {styles.ingrediente}>"-   +"</Text>
					</View>
					<View style = {styles.div2}>
						<Text style = {styles.ingrediente}>{item.cremes[2]}</Text>
						<Text style = {styles.ingrediente}>"-   +"</Text>
					</View>
					<View style = {styles.div2}>
						<Text style = {styles.ingrediente}>{item.cremes[3]}</Text>
						<Text style = {styles.ingrediente}>"-   +"</Text>
					</View>
				</View>
				<View style = {styles.div1}>
					<Text style = {styles.titulo}>{item.titulo2}</Text>
					<View style = {styles.div2}>
						<Text style = {styles.ingrediente}>{item.recheios[0]}</Text>
						<Text style = {styles.ingrediente}>"-   +"</Text>
					</View>
					<View style = {styles.div2}>
						<Text style = {styles.ingrediente}>{item.recheios[1]}</Text>
						<Text style = {styles.ingrediente}>"-   +"</Text>
					</View>
					<View style = {styles.div2}>
						<Text style = {styles.ingrediente}>{item.recheios[2]}</Text>
						<Text style = {styles.ingrediente}>"-   +"</Text>
					</View>
					<View style = {styles.div2}>
						<Text style = {styles.ingrediente}>{item.recheios[3]}</Text>
						<Text style = {styles.ingrediente}>"-   +"</Text>
					</View>
					<View style = {styles.div2}>
						<Text style = {styles.ingrediente}>{item.recheios[4]}</Text>
						<Text style = {styles.ingrediente}>"-   +"</Text>
					</View>
					<View style = {styles.div2}>
						<Text style = {styles.ingrediente}>{item.recheios[5]}</Text>
						<Text style = {styles.ingrediente}>"-   +"</Text>
					</View>
					<View style = {styles.div2}>
						<Text style = {styles.ingrediente}>{item.recheios[6]}</Text>
						<Text style = {styles.ingrediente}>"-   +"</Text>
					</View>
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
		backgroundColor: "green",
		justifyContent: 'space-between',
		marginTop: 5,
		padding: 5,
		paddingTop: 30
	},
	div2: {
		width: 360,
		padding: 15,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
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
