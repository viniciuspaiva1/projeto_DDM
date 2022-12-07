import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';

import { getCremes, pegarCremeTempoReal, getRecheios, pegarRecheioTempoReal, atualizarProduto} from '../servicos/firebase/firestore'

export default function CheckMake({ navigation }){
	const [cremes, setCremes] = useState([]);
	const [cremeclick, setCremeclick] = useState([false, false, false]);
	const [recheios, setRecheios] = useState([]);

	useEffect(()=>{
		async function carregaDadosCremes(){
			const cremesFirestore = await getCremes();
			setCremes(cremesFirestore);
		}
		carregaDadosCremes();
		pegarCremeTempoReal(setCremes);
	},[]);

	useEffect(()=>{
		async function carregaDadosRecheios(){
			const recheiosFirestore = await getRecheios();
			setRecheios(recheiosFirestore);
		}
		carregaDadosRecheios();
		pegarRecheioTempoReal(setRecheios);
	},[]);

	return(
		<ScrollView>	
			<View style={styles.list}>
				<View style = {styles.divFlex}>
					<View style = {styles.div1}> 
						<Text style = {styles.titulo}>Cremes Disponíveis:</Text>
						{
							cremes.map((creme)=> {
								return(
									<TouchableOpacity 
									style ={creme.click ? styles.divClicked : styles.div2}
									onPress = {()=>{
										atualizarProduto(creme.id, "cremes", { click: !creme.click });
									}}
										key={creme.id}>
										<Text style = {styles.ingrediente}>{creme.nome}</Text>
										<Text style = {styles.ingrediente}>-   +</Text>
									</TouchableOpacity>
									)
							})
						}
					</View>
				</View>
				<View style = {styles.divFlex}>
					<View style = {styles.div1}> 
						<Text style = {styles.titulo}>Recheios Disponíveis:</Text>
						{
							recheios.map((recheio)=> {
								return(
									<TouchableOpacity 
									style ={recheio.click ? styles.divClicked : styles.div2}
									onPress = {()=>{
										atualizarProduto(recheio.id, "recheios", { click: !recheio.click });
									}}
										key={recheio.id}>
										<Text style = {styles.ingrediente}>{recheio.nome}</Text>
										<Text style = {styles.ingrediente}>-   +</Text>
									</TouchableOpacity>
									)
							})
						}
					</View>
				<TouchableOpacity style={styles.submit} onPress={() => navigation.navigate('Orders')}>
					<Text style={styles.submitText}>Fazer pedido</Text>
				</TouchableOpacity>
			</View>
				</View>
		</ScrollView>
	);
}

const styles= StyleSheet.create({	
	list: {
	  flex: 1,
	  backgroundColor: 'gray',
	  justifyContent: "space-between"
	},
	divFlex:{
		flex: 1,
		flexDirection: "column",
		alignItems: 'center',
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
		paddingTop: 10,
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
	submit: {
		backgroundColor: 'green',
		marginTop: 10,
		margin: 5,
		padding: 5,
		borderRadius: 5,
		height: 50,
		width: 150,
		alignItems: 'center',
		justifyContent: 'center',

	},
	submitText: {
		fontSize: 20,
	}
  });
