import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
//import views
import Home from './Views/Home/Home';
import Movie from './Views/Movie/Movie';

const { Navigator, Screen } = createStackNavigator();

const Navigation = () => {
	/* return (
		<>
			<SafeAreaView style={styles.container}>
				<Movie></Movie>
			</SafeAreaView>
		</>
	); */
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<Navigator
					screenOptions={{
						headerShown: false,
					}}
					initialRouteName="Home"
				>
					<Screen
						name="Home"
						options={{ headerShown: false }}
						component={Home}
					/>
					<Screen
						name="Movie"
						options={{ headerShown: false }}
						component={Movie}
					/>
				</Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default Navigation;
