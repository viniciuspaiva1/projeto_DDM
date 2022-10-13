import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function CheckOrder({ navigation }){
    const [checkorder, setCheckOrder] = useState([]);

    useEffect(() => {
        async function getData(){
            const response = await fetch('https://raw.githubusercontent.com/viniciuspaiva1/JSON-Fake/main/ingredientes.JSON');
            const checkorder = await response.json();
            console.log(checkorder);
            setCheckOrder(checkorder);
        }
        getData();
    }, []);

    function renderItem({item}){
        return <View>

        </View>
    }

    return(
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <Text>Detalhe do produto</Text>
            <FlatList
                data={checkorder}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});