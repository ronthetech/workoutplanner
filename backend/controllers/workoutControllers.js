const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

// get all workouts
const getWorkouts = async (req, res) => {
	const workouts = await Workout.find({}).sort({ createdAt: -1 }); // sort descending with newest ones at the top

	// responds with all workouts
	res.status(200).json(workouts);
};

// create a new workout
const newWorkout = async (req, res) => {
	// destructuring req body to get the details/fields/props of new workout
	const { title, load, reps, minutes } = req.body;

	//
	let emptyFields = [];

	if (!title) {
		emptyFields.push("title");
	}
	if (!load) {
		emptyFields.push("load");
	}
	if (!reps) {
		emptyFields.push("reps");
	}
	if (emptyFields.length > 0) {
		return res.status(400).json({ error: "Please fill in all required fields", emptyFields });
	}

	// add new workout to the database
	try {
		// we will try to add to db
		const workout = await Workout.create({ title, load, reps, minutes });
		// responds with new workout
		res.status(200).json(workout);
	} catch (err) {
		// if there is an error we want to catch it and get the message
		res.status(400).json({ error: err.message });
	}
};

// get a single workout
const getWorkout = async (req, res) => {
	// get the id
	const { id } = req.params;

	// checks if id is a valid mongodb
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such workout" });
	}

	// find the workout with that id
	const workout = await Workout.findById(id);

	// checks if the selected workout exists
	if (!workout) {
		return res.status(404).json({ error: "No such workout" });
	}

	// responds with selected workout
	res.status(200).json(workout);
};

// delete a workout
const deleteWorkout = async (req, res) => {
	// get the id
	const { id } = req.params;

	// checks if id is a valid mongodb
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such workout" });
	}

	// find and delete workout with the given id
	const workout = await Workout.findByIdAndDelete(id);

	// checks if the selected workout exists
	if (!workout) {
		return res.status(400).json({ error: "No such workout" });
	}

	// responds with deleted workout
	res.status(200).json(workout);
};

// update a workout
const updateWorkout = async (req, res) => {
	// get the id
	const { id } = req.params;

	// checks if id is a valid mongodb
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such workout" });
	}

	// find and update workout with the given id
	const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });

	// checks if the selected workout exists
	if (!workout) {
		return res.status(400).json({ error: "No such workout" });
	}

	// responds with updated workout
	res.status(200).json(workout);
};

// exports all the controllers so you can use them in routes
module.exports = { getWorkouts, newWorkout, getWorkout, deleteWorkout, updateWorkout };
