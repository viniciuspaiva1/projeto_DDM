import { db } from "../../../config/firebase";
import { 
  collection, 
  addDoc,
  doc, 
  getDocs, 
  onSnapshot, 
  query, 
  updateDoc, 
} from "firebase/firestore";

export async function getCremes(){
    try{
        const cremeSnapshot = await getDocs(collection(db, "cremes"));
        let cremes = [];
        cremeSnapshot.forEach((doc) => {
            let creme = { id: doc.id, ...doc.data()};
            cremes.push(creme);
        });
        return cremes
    }catch(error){
        console.log(error);
        return[]
    }
};

export async function pegarCremeTempoReal(setCremes){
    const ref = query(collection(db, "cremes"))
    onSnapshot(ref, (querySnapshot)  =>{
        const cremes = []
        querySnapshot.forEach((doc) => {
            cremes.push({id: doc.id, ...doc.data()})
        })
        setCremes(cremes)
    })
  }

  export async function getRecheios(){
    try{
        const recheiosSnapshot = await getDocs(collection(db, "recheios"));
        let recheios = [];
        recheiosSnapshot.forEach((doc) => {
            let recheio = { id: doc.id, ...doc.data()};
            recheios.push(recheio);
        });
        return recheios
    }catch(error){
        console.log(error);
        return[]
    }
};

  export async function pegarRecheioTempoReal(setRecheios){
    const ref = query(collection(db, "recheios"))
    onSnapshot(ref, (querySnapshot)  =>{
        const recheios = []
        querySnapshot.forEach((doc) => {
            recheios.push({id: doc.id, ...doc.data()})
        })
        setRecheios(recheios)
    })
  }

  export async function atualizarProduto(produtoID, tipo, data) {
    try {
      const docRef = doc(db, tipo, produtoID);
      await updateDoc(docRef, data);
      return 'ok';
    } catch (e) {
      console.error("Error adding document: ", e);
      return 'error';
    }
  }

  export async function enviarPedido(pedidocreme, pedidorecheio) {
    if(pedidocreme.length <= 0 || pedidorecheio.length <= 0)
      return;
    try {
      const docRef = await addDoc(collection(db, "pedidos"), {
        cremes: pedidocreme,
        recheios: pedidorecheio
      });
      return 'ok';
    } catch (e) {
      console.error("Error adding document: ", e);
      return 'error';
    }
  }

