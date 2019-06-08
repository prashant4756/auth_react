//import library
import React from 'react';
import { Text, View } from 'react-native';


//make component
const Header = (props) => {
	//props is a js variable which we will access in jsx, so use {} to access it
	const { textStyle, viewStyle } = styles;
	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerTitle}</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center', //vertical
		alignItems: 'center',  //horizontal
		height: 60,
		paddingTop: 15,
		// paddingBottom: 15,
		// shadowColor: '#000', //black // shadows work only on IOS
		// shadowOffset: { width: 0, height: 2 },
		// shadowOpacity: 0.2,
		elevation: 3,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20
	}
};


//make component available to other parts of app
// export default Header;
export { Header };

