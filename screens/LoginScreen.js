import AuthContent from "../components/Auth/AuthContent";
import { useState } from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { login } from "../util/auth";
import { Alert } from "react-native";

function LoginScreen() {
	const [isAuthenticating, setIsAuthenticating] = useState(false);

	async function loginHandler({ email, password }) {
		setIsAuthenticating(true);
		try {
			await login(email, password);
		} catch (error) {
			Alert.alert("Login failed", error.message);
		}

		setIsAuthenticating(false);
	}

	if (isAuthenticating) {
		return <LoadingOverlay message="Logging in..." />;
	}

	return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
