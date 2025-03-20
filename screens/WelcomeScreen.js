import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../store/auth-context";

function WelcomeScreen() {
	const [fetchedMessages, setFetchedMessages] = useState("");
	const authCtx = useContext(AuthContext);
	const token = authCtx.token;

	useEffect(() => {
		axios
			.get(
				`https://expense-tracker-a9ce8-default-rtdb.europe-west1.firebasedatabase.app/message.json?auth=${token}`,
			)
			.then((response) => {
				console.log(response);
				setFetchedMessages(response.data);
			});
	}, [token]);

	return (
		<View style={styles.rootContainer}>
			<Text style={styles.title}>Welcome!</Text>
			<Text>You authenticated successfully!</Text>
			<Text>{fetchedMessages}</Text>
		</View>
	);
}

export default WelcomeScreen;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 32,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 8,
	},
});
