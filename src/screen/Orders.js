import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';
import { getCremes, pegarCremeTempoReal, getRecheios, pegarRecheioTempoReal} from '../servicos/firebase/firestore'

import Header from '../components/Header';

export default function Orders({ navigation }){
	const [cremes, setCremes] = useState([]);
	const [cremeclick, setCremeclick] = useState([false, false, false]);
	const [recheios, setRecheios] = useState([]);
  const [pedidocreme, setPedidoCreme] = useState([]);

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
    <View style={styles.container}>
        <StatusBar style='auto'/>
        <Header/>
        <View style={styles.pedido}>
            <Text style={styles.pedidoText}>Seu Pedido:</Text>
            <Text style={styles.titulo}> Cremes:</Text>
            {
                cremes.map((creme) => {
                    if(creme.click){
                        return <Text style={styles.options} key={creme.nome}>{creme.nome}</Text>
                    }
                })
            }
            <Text style={styles.titulo}> Recheios:</Text>
            {
                recheios.map((recheio) => {
                    if(recheio.click){
                        return <Text style={styles.options} key={recheio.nome}>{recheio.nome}</Text>
                    }
                })
            }
        </View>
    </View>
  );
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
  },
  pedido: {
    flex: 1,
    backgroundColor: '#ccc',
    padding: 15,
    marginVertical: 15,
    marginHorizontal: 10,
    borderRadius: 15,
  },
  pedidoText: { 
    fontSize: 25,
    fontWeight: 'bold',
  }, 
  titulo: {
    fontSize: 25,
  },
  options: {
    fontSize: 15,
    marginLeft: 20,
    color: '#779'
  }
});

