import { useState, useRef } from "react";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Navbar } from "./navbar";
import { ToastContainer, toast } from 'react-toastify';
import React, { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [isButtonActive, setIsButtonActive] = useState(false); // State to manage button press effect
    const signInButtonRef = useRef(null); // Reference for the sign-in button


    const authDict = {
        "cise_tutor@ufl.edu": "Tutor",
        "cise_admin@ufl.edu": "Admin"
    };

    useEffect(() => {
        if (emailRef.current) {
            emailRef.current.focus(); // Automatically focus the email input on component mount
        }
    }, []);

    const signIn = async () => {
        
        if (emailRef.current) emailRef.current.blur();
        if (passwordRef.current) passwordRef.current.blur();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setLoggedIn(true);
            toast.success(`Signed in as ${authDict[email]} successfully.`);
            setEmail("");
            setPassword("");
        } catch (error) {
            console.error(error);
            setLoggedIn(false);
            setPassword("");
            toast.error("Invalid email or password. Please try again.");
        }
    };

    const signOut = async () => {
        try {
            await auth.signOut();
            setLoggedIn(false);
            toast.info("Signed out successfully.");
            setEmail("");
            setPassword("");
        } catch (error) {
            console.error('Sign Out Error', error);
            toast.error("Error signing out.");
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            signIn();
            triggerButtonPressEffect();
        }
    };

    const triggerButtonPressEffect = () => {
        setIsButtonActive(true);
        setTimeout(() => setIsButtonActive(false), 300); // Reset the effect after 200ms
    };

    return (
        <>
            <style
            dangerouslySetInnerHTML={{
            __html:
                `
                .btn.btn-outline-dark {
                    color: #00529b; /* Green text color to match the border */
                    background-color: #fff; /* White background initially */
                    border-color: #00529b; /* Green border */
                    
                }
                
                .btn.btn-outline-dark:hover, .btn.btn-outline-dark.active {
                    color: #fff; /* White text on hover */
                    background-color: #00529b; /* Green background on hover */
                    border-color: #00529b; /* Green border on hover */
                }

                

                .btn.btn-secondary {
                    color: grey; /* Green text color to match the border */
                    background-color: #fff; /* White background initially */
                    border-color: grey; /* Green border */
                    
                }
                
                .btn.btn-secondary:hover {
                    color: #fff; /* White text on hover */
                    background-color: #00529b; /* Green background on hover */
                    border-color: #00529b; /* Green border on hover */
                }
                `
            }}
            ></style>
            <Navbar />
            <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <h1 className="display-3 text-center mb-4" style={{ marginTop: '1rem' }}>Admin Login </h1>

            <div className="container">
                <div className="rounded border p-3 shadow " style={{ backgroundColor: '#f8f9fa', border: '1px solid #ccc', margin: '0 auto', borderRadius: '15px', width: '40%' }}>
                    <p className="text-center mb-3">Login portal for administrators and tutors</p> {/* Descriptive text */}

                    <div className="mb-3" >
                        <input
                            ref={emailRef}
                            className="form-control"
                            placeholder="Email..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            ref={passwordRef}
                            className="form-control"
                            placeholder="Password..."
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyPress={handleKeyPress}

                        />
                    </div>
                    <div className="d-flex justify-content-between">
                    <button 
                            ref={signInButtonRef}
                            className={`btn btn-outline-dark ${isButtonActive ? 'active' : ''}`} 
                            onClick={signIn}
                            onMouseDown={triggerButtonPressEffect}
                            onMouseUp={() => setIsButtonActive(false)}
                            style={{ boxShadow: 'none' }} // Inline style to ensure no shadow

                        >
                            Sign In
                        </button>
                        <button className="btn btn-secondary" onClick={signOut}>Sign Out</button>
                    </div>
                </div>
            </div>
        </>
    );
};
