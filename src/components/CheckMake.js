import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, CheckBox, ScrollView} from 'react-native';

import { getCreme, pegarCremeTempoReal, getRecheios, pegarRecheioTempoReal, atualizarProduto} from '../servicos/firebase/firestore'

export default function CheckMake({ navigation }){
	const [cremes, setCremes] = useState([]);
	const [recheios, setRecheios] = useState([]);

	useEffect(()=>{
		async function carregaDadosCremes(){
			const cremesFirestore = await getCreme();
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
						<Text style = {styles.titulo}>Cremes Disponíveis</Text>
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
								<Text style = {styles.ingrediente}>"-   +"</Text>
							</TouchableOpacity>
									)
							})
						}
					</View>
				</View>
				<View style = {styles.divFlex}>
					<View style = {styles.div1}> 
						<Text style = {styles.titulo}>Recheios Disponíveis</Text>
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
										<Text style = {styles.ingrediente}>"-   +"</Text>
									</TouchableOpacity>
									)
							})
						}
					</View>
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
