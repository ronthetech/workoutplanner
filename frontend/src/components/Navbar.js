import { Link } from "react-router-dom";

function Navbar() {
	return (
		<header>
			<div className='container'>
				<Link to='/'>
					<h1>New Workout Planner</h1>
				</Link>
				{/*<Link to='/login'>Log in</Link>
				 <button>Log Out</button> */}
			</div>
		</header>
	);
}

export default Navbar;
