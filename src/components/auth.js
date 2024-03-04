import { useState } from "react";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Signed in successfully")
        } catch(err) {
            console.error(err);
        }
    };
    return (
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
        </div>
    )
}