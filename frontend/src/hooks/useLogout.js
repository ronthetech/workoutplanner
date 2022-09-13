import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useContext } from "react";
// context
import { AuthContext } from "../context/AuthContext";

export const useLogout = () => {
	const { dispatch } = useContext(AuthContext);
	const logout = async () => {
		try {
			await signOut(auth); // log user out with method from firebase/auth
			dispatch({ type: "LOGOUT" });
			console.log("user logged out");
		} catch (error) {
			// catch error if it occurs
			console.log(error.message);
		}
	};

	return { logout };
};
