import { useState } from "react";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Navbar } from "./navbar"
import { ArrowLeftIcon } from "@heroicons/react/outline";


export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false); // State to track login status
    const [loginError, setLoginError] = useState(null); // State to track login errors
    const [loginMessage, setLoginMessage] = useState(null); // State to track login errors

    const signIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Signed in successfully")
            setLoggedIn(true); // Update login status
            setLoginError(null); // Clear any previous login errors
            setLoginMessage("Successfully logged in!");
            // Clear email and password fields
            setEmail("");
            setPassword("");
        } catch(err) {
            console.error(err);
            setLoggedIn(false); // Update login status
            setPassword("");
            setLoginError("Invalid email or password. Please try again."); // Set login error message
        }
    };
    const signOut = async () => {
        auth.signOut().then(function() {
            console.log('Signed Out');
            setLoggedIn(true); // Update login status
            setLoginError(null); // Clear any previous login errors
            setLoginMessage("Signed out successfully.");
            // Clear email and password fields
            setEmail("");
            setPassword("");
          }, function(error) {
            console.error('Sign Out Error', error);
          });
    };
    return (
        <>
        <Navbar />
        <div className="container">
            <h1 className="display-3" style={{ margin: 20 }}>
            Admin Login
            </h1>
        </div>
        <div>
            <input
                placeholder="Email..." 
                value={email} // Bind value to email state
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                placeholder="Password..." 
                type="password"
                value={password} // Bind value to password state
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signIn}>Sign In</button>
            <button onClick={signOut}>Sign Out</button>
            {loggedIn && <p style={{ color: 'green' }}>{loginMessage}</p>}
            {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
        </div>
        </>
    )
}
