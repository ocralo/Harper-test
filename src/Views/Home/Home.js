import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './Home.style';

// import components
import RowItem from '../../Components/RowItem/RowItem';

const Home = ({ navigation }) => {
	const [search, setSearch] = useState('');
	const updateSearch = (searchinput) => {
		setSearch(searchinput);
	};
	return (
		<SafeAreaView style={styles.containerSafeArea}>
			<View style={styles.containerHome}>
				<View style={styles.containerHeader}>
					<Text style={styles.title}>Hola, ¿qué deseas ver hoy?</Text>
					<SearchBar
						round={true}
						showCancel={true}
						containerStyle={styles.searchInput}
						placeholder="Search"
						onChangeText={updateSearch}
						lightTheme={true}
						value={search}
					/>
				</View>
				<View style={styles.bodyHome}>
					<RowItem navigation={navigation}></RowItem>
					<RowItem title={'LOS MEJORES'}></RowItem>
				</View>
			</View>
		</SafeAreaView>
	);
};

Home.propTypes = { navigation: PropTypes.object };

Home.defaultProps = {};

export default Home;
