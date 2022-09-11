import { useEffect } from "react";

import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
	const { workouts, dispatch } = useWorkoutsContext();
	//const [workouts, setWorkouts] = useState(null);

	useEffect(() => {
		const fetchWorkouts = async () => {
			const response = await fetch("/api/workouts");
			// turn the response into an object
			const json = await response.json();

			// if the response is ok, set the object array as the workouts
			if (response.ok) {
				//setWorkouts(json);
				dispatch({ type: "SET_WORKOUTS", payload: json });
			}
		};

		fetchWorkouts();
	}, [dispatch]); // fires function when component is rendered, so every time dispatch changes
	// when we were using state, we only wanted it to fire once so we used []

	return (
		<div className='home'>
			<div className='workouts'>{workouts && workouts.map((workout) => <WorkoutDetails key={workout._id} workout={workout} />)}</div>
			<WorkoutForm />
		</div>
	);
};

export default Home;
