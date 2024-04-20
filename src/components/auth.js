import { useState } from "react";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Navbar } from "./navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false); // State to track login status
    const authDict = {
        "cise_tutor@ufl.edu": "tutor",
        "cise_admin@ufl.edu": "admin"
      };

    const signIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setLoggedIn(true); // Update login status
            toast.success("Signed in as " + authDict[email] + " successfully"); // Toast message for successful login
            setEmail(""); // Clear email field
            setPassword(""); // Clear password field
        } catch(err) {
            console.error(err);
            setLoggedIn(false); // Update login status
            setPassword(""); // Clear password field
            toast.error("Invalid email or password. Please try again."); // Toast message for login error
        }
    };

    const signOut = async () => {
        try {
            await auth.signOut();
            setLoggedIn(false); // Update login status
            toast.info("Signed out successfully."); // Toast message for successful logout
            setEmail(""); // Clear email field
            setPassword(""); // Clear password field
        } catch(error) {
            console.error('Sign Out Error', error);
            toast.error("Error signing out."); // Toast message for logout error
        }
    };

    return (
        <>
            <Navbar />
            <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <div className="container">
                <h1 className="display-3" style={{ margin: 20 }}>
                    Admin Login
                </h1>
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
            </div>
        </>
    );
};
