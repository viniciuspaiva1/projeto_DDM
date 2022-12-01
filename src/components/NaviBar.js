import React from 'react';
import {View, FlatList } from 'react-native';

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