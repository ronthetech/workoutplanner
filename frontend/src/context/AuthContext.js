import { createContext, useEffect, useReducer } from "react";
import authReducer from "../reducers/authReducer";
// persisting the auth state so users don't log out on refresh
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";

// create context object - use it to consume context in our components
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, {
		user: null,
		authIsReady: false,
	});
	console.log(state);
	// value determines the current context value in App.js

	// takes the auth we imported from firebase/config and a callback function that gets invoked immediately after registering onAuthStateChanged observer with current authentication state and whenever the auth state changes
	useEffect(() => {
		// pass the data received from the user object and set dispatch method to dispatch action.type AUTH_IS_READY and the payload as the user object to update the value of the context
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			dispatch({ type: "AUTH_IS_READY", payload: user });
		});
		// returns the unsubscribe function to unregister onAuthStateChanged observer, for cleanup to avoid memory leaks
		return unsubscribe;
	}, []);
	return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
