import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/config";
import { useState, useContext } from "react";

// context
import { AuthContext } from "../context/AuthContext";

export const useLogin = () => {
	const [error, setError] = useState(false);
	const [isPending, setIsPending] = useState(false);
	const provider = new GoogleAuthProvider();
	// used to update context value when we log in
	const { dispatch } = useContext(AuthContext);

	const login = async () => {
		setError(null);
		setIsPending(true);

		try {
			const res = await signInWithPopup(auth, provider);
			if (!res) {
				throw new Error("Could not complete signup");
			}

			const user = res.user;
			dispatch({ type: "LOGIN", payload: user });
			// console.log(user);
			setIsPending(false);
		} catch (error) {
			console.log(error);
			setError(error.message);
			setIsPending(false);
		}
	};

	return { login, error, isPending };
};
