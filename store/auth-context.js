import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
	isAuthenticated: false,
	token: "",
	authenticate: () => {},
	logout: () => {},
});

function AuthContextProvider({ children }) {
	const [authToken, setAuthToken] = useState();

	function authenticate(token) {
		setAuthToken(token);
		AsyncStorage.setItem("token", token);
	}

	function logout() {
		setAuthToken(null);
		AsyncStorage.removeItem("token");
	}

	const value = {
		isAuthenticated: Boolean(authToken),
		token: authToken,
		authenticate,
		logout,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
