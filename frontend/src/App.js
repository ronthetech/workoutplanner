import { Route, Routes } from "react-router-dom";

// pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

function App() {
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

