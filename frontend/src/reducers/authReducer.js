// function takes in state and action
// state
// action - object that describes how to update state
// performed by a user on some user interaction, i.e. clicking a log in or log out button
const authReducer = (state, action) => {
	// switch case determines the action.type and runs corresponding case according to action.type
	switch (
		action.type // type - a string representing action being performed
	) {
		// payload - data you need to pass along with action.type being performed, i.e. user data when signing a user up
		case "LOGIN":
			return { ...state, user: action.payload };
		case "LOGOUT":
			return { ...state, user: null };
		case "AUTH_IS_READY":
			return { ...state, user: action.payload, authIsReady: true };
		default:
			// if there is no action.type that matches it returns state unchanged, and nothing happens
			return state;
	}
};

export default authReducer;
