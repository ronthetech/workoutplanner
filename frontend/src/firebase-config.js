// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// for authentication with google
import { getAuth, GoogleAuthProvider } from "firebase/auth";

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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// for authentication with google
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
