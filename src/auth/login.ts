import { signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase.js";

const handleLogin = (email:string, password:string):void => {

    // email and password validation
    if (email.length === 0 || password.length === 0) {
        console.log("Please enter email and password");
        return;
    }
    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length >= 6;
  
    if (!emailIsValid || !passwordIsValid) {
      console.log("Invalid input", "Please check your entered credentials.");
      return;
    }
  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        // console.log("Logged in with:", user.email);
        // console.log(user);
        console.log("Logged in");
      })
      .catch((error) => console.log(error.message));
  };
  
  handleLogin("a@a.com","123456");