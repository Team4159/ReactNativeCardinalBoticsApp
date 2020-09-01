import {Button, StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import React from 'react';

class ModalPopUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			onPress: props.onPress,
			show: props.show,
			text: props.text,
			buttonText: props.buttonText
		};
	}

	render() {
		return (
			<Modal isVisible={this.state.show()}
				onBackdropPress={this.close}>
				<View style={styles.content}>
					<Text styles={styles.contentTitle}>
						{this.state.text || "Oh, the programmers forgot to leave a message here"}
					</Text>
					<Button testID="close-button" onPress={this.state.onPress} title={this.state.buttonText || "Close"}/>
				</View>
			</Modal>
		);
	}
}

const styles = StyleSheet.create({
	content: {
		backgroundColor: 'white',
		padding: 22,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		borderColor: 'rgba(0, 0, 0, 0.1)',
	},
	contentTitle: {
		fontSize: 20,
		marginBottom: 12,
	},
});

export default ModalPopUp;