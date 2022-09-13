import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutDetails = ({ workout }) => {
	const { dispatch } = useWorkoutsContext();

	// adds the delete functionality
	const handleClick = async (e) => {
		e.preventDefault();
		const response = await fetch("/api/workouts/" + workout._id, {
			method: "DELETE",
		});

		const json = await response.json();

		if (response.ok) {
			//console.log("workout deleted:", json);

			dispatch({ type: "DELETE_WORKOUT", payload: json });
		}
	};

	return (
		<div className='workout-details'>
			<h3>{workout.title}</h3>
			<p>
				<strong>Reps: {workout.reps}</strong>
			</p>
			<p>
				<strong>Load (lbs): {workout.load}</strong>
			</p>
			{workout.minutes ? (
				<p>
					<strong>Length (mins): {workout.minutes}</strong>
				</p>
			) : (
				<p></p>
			)}
			<p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
			<button onClick={handleClick}>Delete</button>
		</div>
	);
};

export default WorkoutDetails;
