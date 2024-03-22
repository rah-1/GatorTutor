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

    const signIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Signed in successfully")
            setLoggedIn(true); // Update login status
            setLoginError(null); // Clear any previous login errors
        } catch(err) {
            console.error(err);
            setLoggedIn(false); // Update login status
            setLoginError("Invalid email or password. Please try again."); // Set login error message
        }
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
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                placeholder="Password..." 
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signIn}>Sign In</button>
            {loggedIn && <p style={{ color: 'green' }}>Successfully logged in!</p>}
            {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
        </div>
        </>
    )
}