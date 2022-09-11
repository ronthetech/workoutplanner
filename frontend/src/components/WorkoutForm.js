import { useState } from "react";

import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
	const { dispatch } = useWorkoutsContext();

	const [title, setTitle] = useState("");
	const [load, setLoad] = useState("");
	const [reps, setReps] = useState("");
	const [minutes, setMinutes] = useState("");
	const [error, setError] = useState(null);

	// (this) is the workout form
	const handleSubmit = async (e) => {
		//prevent submit when you press button
		e.preventDefault();

		const workout = { title, load, reps, minutes };

		//
		const response = await fetch("api/workouts", {
			method: "POST",
			body: JSON.stringify(workout),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const json = await response.json();

		//if response is not ok/if we don't receive response.ok
		// set the error to the json.error
		if (!response.ok) {
			setError(json.error);
		}
		// if response is ok, then we were successful so we should clear the form by setting all of the states to blank, and set the error back to null
		if (response.ok) {
			setError(null);
			setTitle("");
			setLoad("");
			setReps("");
			setMinutes("");
			console.log("new workout added:", json);

			dispatch({ type: "CREATE_WORKOUT", payload: json });
		}
	};

	return (
		<form onSubmit={handleSubmit} className='create'>
			<h3>Add a New Workout</h3>

			<label htmlFor='workout-title'>Exercise Title:</label>
			<input
				type='text'
				onChange={(e) => {
					setTitle(e.target.value);
				}}
				value={title}
			/>
			<label htmlFor='workout-load'>Load in (lbs):</label>
			<input
				type='number'
				onChange={(e) => {
					setLoad(e.target.value);
				}}
				value={load}
			/>
			<label htmlFor='workout-reps'>Number of Reps:</label>
			<input
				type='number'
				onChange={(e) => {
					setReps(e.target.value);
				}}
				value={reps}
			/>
			<label htmlFor='workout-minutes'>Length in Minutes:</label>
			<input
				type='number'
				onChange={(e) => {
					setMinutes(e.target.value);
				}}
				value={minutes}
			/>

			<button>Add Workout</button>
			{error && <div className='error'>{error}</div>}
		</form>
	);
};

export default WorkoutForm;
