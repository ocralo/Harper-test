import React from 'react';
import PropTypes from 'prop-types';
import { Alert, View } from 'react-native';

const AlertView = ({ title, msg }) => (
	<View>
		{Alert.alert(
			title,
			msg,
			[
				{
					text: 'Cancelar',
					onPress: () => console.log('Cancel Pressed'),
					style: 'cancel',
				},
				{ text: 'OK', onPress: () => console.log('OK Pressed') },
			],
			{ cancelable: false },
		)}
	</View>
);

AlertView.propTypes = {
	title: PropTypes.string,
	msg: PropTypes.string,
};

AlertView.defaultProps = {
	title: 'Error',
	msg: 'Se a producido un error',
};

export default AlertView;
