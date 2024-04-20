import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import { auth } from "../config/firebase";


function GetAuth() {
  const location = useLocation();
  const [currentUserEmail, setCurrentUserEmail] = useState("Student");

  useEffect(() => {
    const authDict = {
      "cise_tutor@ufl.edu": "Tutor",
      "cise_admin@ufl.edu": "Admin"
    };

    function handleAuthStateChanged(user) {
      if (user) {
        setCurrentUserEmail(authDict[user.email]);
      } else {
        setCurrentUserEmail("Student");
      }
    }

    const unsubscribe = auth.onAuthStateChanged(handleAuthStateChanged);

    return () => unsubscribe();
  }, [location.pathname]); // Include any dependencies that you may need

  return currentUserEmail;
}

export default GetAuth;
