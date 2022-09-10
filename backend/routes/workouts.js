const express = require("express");
const { getWorkouts, newWorkout, getWorkout, deleteWorkout, updateWorkout } = require("../controllers/workoutControllers");

const router = express.Router();
// router.get("/", () => {});

// gets all the workout documents
router.get("/", getWorkouts);

// creates a new workout document
router.post("/", newWorkout);

// gets a single workout document
router.get("/:id", getWorkout);

// deletes a single workout
router.delete("/:id", deleteWorkout);

// updates a single workout
router.patch("/:id", updateWorkout);

module.exports = router;
