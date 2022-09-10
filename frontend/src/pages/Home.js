import { useState, useEffect } from "react";

// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
	const [workouts, setWorkouts] = useState(null);

	useEffect(() => {
		const fetchWorkouts = async () => {
			const response = await fetch("/api/workouts");
			// turn the response into an object
			const json = await response.json();

			// if the response is ok, set the object array as the workouts
			if (response.ok) {
				setWorkouts(json);
			}
		};

		fetchWorkouts();
	}, []); // fires function when component is rendered, only want it to fire once so we use []

	return (
		<div className='home'>
			<div className='workouts'>{workouts && workouts.map((workout) => <WorkoutDetails key={workout._id} workout={workout} />)}</div>
			<WorkoutForm />
		</div>
	);
};

export default Home;
