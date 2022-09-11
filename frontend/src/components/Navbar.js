import { Link } from "react-router-dom";

function Navbar({ isAuth, signUserOut }) {
	return (
		<header>
			<div className='container'>
				<Link to='/'>
					<h1>New Workout Planner</h1>
				</Link>
				{!isAuth ? <Link to='/login'>Log in</Link> : <button onClick={signUserOut}>Log Out</button>}
			</div>
		</header>
	);
}

export default Navbar;
