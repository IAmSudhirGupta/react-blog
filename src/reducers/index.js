import { combineReducers } from "redux";
const loggedInUser = () => {
    return {
        name: "Sudhir Gupta",
        id: "IAmSudhirGupta"
    }
}

export default combineReducers({
    loggedInUser: loggedInUser
});