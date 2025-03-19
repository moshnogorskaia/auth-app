import axios from "axios";
import { API_KEY } from "../api";

export async function authenticate(mode, email, password) {
	const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

	const response = await axios.post(url, {
		email,
		password,
		returnSecureToken: true,
	});

	console.log(response.data);
}

export function createUser(email, password) {
	return authenticate("signUp", email, password);
}

export function login(email, password) {
	return authenticate("signInWithPassword", email, password);
}
