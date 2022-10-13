import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, FlatList, TouchableOpacity } from 'react-native';

export default function NaviBar({ navigation }){
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