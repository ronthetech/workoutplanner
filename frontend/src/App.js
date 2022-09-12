import { Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

// pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

function App() {
	// accepts context object( AuthContext which was the value returned from createContext) and returns current context value for that context
	const { user } = useContext(AuthContext);
	console.log(user);
	return (
		<div className='App'>
			<Navbar />
			<div className='pages'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
