import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from "./Home";
import NotHome from "./NotHome";

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer style={styles.container}>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{ title: 'Welcome' }}
				/>
				<Stack.Screen
					name="NotHome"
					component={NotHome}
					options={{ title: 'Welcome II' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F00',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
