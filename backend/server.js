require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/workouts");

const port = process.env.PORT || 3002;

// express app
const app = express();

// middleware
app.use(express.json());

// basic test middleware shows current date as string
// app.get(
// 	"/now",
// 	(req, res, next) => {
// 		req.time = new Date().toString();
// 		next();
// 	},
// 	(req, res) => {
// 		res.send({ time: req.time });
// 	}
// );

app.use((req, res, next) => {
	console.log(req.path, req.method); //ip,path,method,params,params.keys
	next(); // must be called or the middleware will never move to the next function
});

// routes
app.use("/api/workouts", routes);

// basic test route
// app.get("/json", (req, res) => {
// 	res.json({ json_message: "Hello there! Welcome to Rons Workout Plan!" });
// });

// connect to database
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log("Now connected to database");
		// app listening for requests
		app.listen(port, () => console.log(`Now listening on port: ${port}`));
	})
	.catch((err) => {
		console.log(err);
	});
