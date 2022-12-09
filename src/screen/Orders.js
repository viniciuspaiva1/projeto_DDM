import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { getCremes, pegarCremeTempoReal, getRecheios, pegarRecheioTempoReal, enviarPedido} from '../servicos/firebase/firestore'

import Header from '../components/Header';

export default function Orders({ navigation }){
	const [cremes, setCremes] = useState([]);
	const [recheios, setRecheios] = useState([]);
  const [pedidocreme, setPedidoCreme] = useState([]);
  const [pedidorecheio, setPedidoRecheio] = useState([]);

	useEffect(()=>{
		async function carregaDados(){
			const cremesFirestore = await getCremes();
			setCremes(cremesFirestore);
      const recheiosFirestore = await getRecheios();
			setRecheios(recheiosFirestore);
		}
		carregaDados();
		pegarCremeTempoReal(setCremes);
    pegarRecheioTempoReal(setRecheios);
	},[]);

  function criarPedidoCreme(){
      let cremep = [];
      cremes.map((creme) => {
        if(creme.click){
            cremep.push(creme.nome);
        }
      })
      setPedidoCreme(cremep);
  };

  function criarPedidoRecheio(){
    let recheiop = [];
    recheios.map((recheio) => {
      if(recheio.click){
          recheiop.push(recheio.nome);
      }
    })
    setPedidoRecheio(recheiop);
};
  function enviar(){
    criarPedidoCreme();
    criarPedidoRecheio();
}

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
        <View style={styles.divcenter}>
          <TouchableOpacity style={styles.submit} 
          onPress={() => {
              enviar();
              enviarPedido(pedidocreme, pedidorecheio);
          }}>
              <Text style={styles.submitText}>Confirmar pedido</Text>
          </TouchableOpacity>
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
  },
  submit: {
		backgroundColor: 'green',
		marginBottom: 20,
		margin: 5,
		padding: 5,
		borderRadius: 5,
		height: 50,
		width: 150,
		alignItems: 'center',
		justifyContent: 'center',

	},
  divcenter: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

