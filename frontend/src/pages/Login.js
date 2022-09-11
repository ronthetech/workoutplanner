import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
	let navigate = useNavigate();

	const signInWithGoogle = () => {
		signInWithPopup(auth, provider).then((result) => {
			localStorage.setItem("isAuth", true);
			setIsAuth(true);
			navigate("/");
		});
	};

	return (
		<div className='login'>
			<h3>Sign In With Google to Continue</h3>
			<button onClick={signInWithGoogle}>Sign In With Google</button>
		</div>
	);
}

export default Login;
