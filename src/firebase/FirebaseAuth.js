import { getAuth, GoogleAuthProvider } from "firebase/auth";
const { app } = require("./firebase.config");

const auth = getAuth(app);
export const googleProvider = GoogleAuthProvider();

export default auth;
