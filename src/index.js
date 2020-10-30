import React, { Component } from 'react';
import { connect } from 'react-redux';

//importacion de librerias externas
import { Provider } from 'react-redux';

//se importa la store de redux, que se utilizara
import configureStore from './Redux/Store/index';

//import View
import Navigation from './Navigation';

const Index = () => {
	return (
		<Provider store={configureStore}>
			<Navigation />
		</Provider>
	);
};

export default Index;
