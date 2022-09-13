import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { useLogout } from "../hooks/useLogout";

function Navbar() {
	const { login, isPending } = useLogin();
	const { logout } = useLogout();

	return (
		<header>
			<div className='container'>
				<Link to='/'>
					<h1>New Workout Planner</h1>
				</Link>
				{/*<Link to='/login'>Log in</Link>
				 <button>Log Out</button> */}
				<button className='btn' onClick={login}>
					{isPending ? "Loading..." : "Login With Google"}
				</button>
				<button className='btn' onClick={logout}>
					Log Out
				</button>
			</div>
		</header>
	);
}

export default Navbar;
