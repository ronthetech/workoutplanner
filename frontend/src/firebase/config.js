// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// analytics
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyB_5aELaiOlQEXcV8pdf9ErdxJ1lAwNre4",
	authDomain: "new-workout-plan-ddb82.firebaseapp.com",
	projectId: "new-workout-plan-ddb82",
	storageBucket: "new-workout-plan-ddb82.appspot.com",
	messagingSenderId: "330839530367",
	appId: "1:330839530367:web:7cdd98854aa124bfad984a",
	measurementId: "G-J5R5Z6RVL1",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth();

export { auth };

//const analytics = getAnalytics(app);
