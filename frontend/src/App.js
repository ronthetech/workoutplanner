import { Route, Routes } from "react-router-dom";
import { useState } from "react";

// firebase authentication
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

// pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

function App() {
	const [isAuth, setIsAuth] = useState(false);

	const signUserOut = () => {
		signOut(auth).then(() => {
			localStorage.clear();
			setIsAuth(false);
			window.location.pathname = "/login";
		});
	};

	return (
		<div className='App'>
			<Navbar isAuth={isAuth} signUserOut={signUserOut} />
			<div className='pages'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;

