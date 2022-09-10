const WorkoutDetails = ({ workout }) => {
	return (
		<div className='workout-details'>
			<h3>{workout.title}</h3>
			<p>
				<strong>Reps: {workout.reps}</strong>
			</p>
			<p>
				<strong>Load (lbs.): {workout.load}</strong>
			</p>
			<p>
				<strong>Length (mins.): {workout.minutes}</strong>
			</p>
			<p>{workout.createdAt}</p>
		</div>
	);
};

export default WorkoutDetails;
