const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//define the structure of the documents we add to the collection
const workoutSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		reps: {
			type: Number,
			required: true,
		},
		load: {
			type: Number,
			required: true,
		},
		minutes: {
			type: Number,
			required: false,
		},
	},
	// automatically adds createdAt, and updatedAt props
	{ timestamps: true }
);

//we run methods on the model
module.exports = mongoose.model("Workout", workoutSchema);
