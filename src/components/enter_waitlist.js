import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Navbar } from "./navbar";
import { db } from "../config/firebase";
import { addDoc, collection, getDocs, Timestamp } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const EnterWaitlist = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [prefTutor, setPrefTutor] = useState('None');
    const [subject, setSubject] = useState('');
    const [ets, setEts] = useState('');
    const [notes, setNotes] = useState('');
    const [currentQueueSize, setCurrentQueueSize] = useState(0);
    const [averageWaitTime, setAverageWaitTime] = useState(30); // Placeholder, modify if needed
    const [tutors, setTutors] = useState([]);

    useEffect(() => {
        const fetchTutors = async () => {
            const querySnapshot = await getDocs(collection(db, "tutors"));
            const fetchedTutors = [];
            querySnapshot.forEach(doc => {
                fetchedTutors.push(doc.data().name);
            });
            setTutors(fetchedTutors);
        };

        const fetchQueueInfo = async () => {
            const querySnapshot = await getDocs(collection(db, "queue"));
            let totalEts = 0;
            querySnapshot.forEach(doc => {
                totalEts += doc.data().ets;
            });
            setCurrentQueueSize(querySnapshot.size);
            setAverageWaitTime(totalEts); // Adjust calculation as needed
        };

        fetchTutors();
        fetchQueueInfo();
    }, []);

    const handleSubmit = async () => {
      if (!firstName || !lastName || !email || !subject || !ets) {
          toast.info("Please fill in all required fields.");
          return;
      }
  
      try {
          await addDoc(collection(db, "queue"), {
              first: firstName,
              last: lastName,
              email: email + "@ufl.edu",
              pref_tutor: prefTutor,
              subject: subject,
              ets: parseInt(ets, 10),
              notes: notes,
              time: Timestamp.now()
          });
          toast.success("Successfully entered the waitlist!");
          // Emit event to update waitlist count in the Navbar
          document.dispatchEvent(new CustomEvent('update-waitlist', { detail: { size: 1 } }));
          // Clear form fields
          setFirstName('');
          setLastName('');
          setEmail('');
          setPrefTutor('None');
          setSubject('');
          setEts('');
          setNotes('');
      } catch (error) {
          console.error("Error adding to queue: ", error);
          toast.error("Failed to enter the waitlist.");
      }
  };
  
    return (
        <>
        <style
  dangerouslySetInnerHTML={{
    __html: `
      .column-container {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .column-container:hover {
        transform: scale(1.03);
        box-shadow: 0 0 15px rgba(0, 82, 155, 0.75); /* Blue glow effect */
      }

      .info-box {
        height: 150px; /* Set a fixed height for consistency */
        display: flex; /* Enable flexbox */
        flex-direction: column; /* Stack children vertically */
        justify-content: center; /* Align content to the center vertically */
        align-items: center; /* Center content horizontally */
        margin-bottom: 20px; /* Space between boxes */
        padding-top: 15%; /* Shift content slightly towards the top */
        transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transitions for transform and shadow */
      }

      .btn.btn-outline-dark {
        color: #00529b; /* Green text color to match the border */
        background-color: #fff; /* White background initially */
        border-color: #00529b; /* Green border */
      }

      .btn.btn-outline-dark:hover {
        color: #fff; /* White text on hover */
        background-color: #00529b; /* Green background on hover */
        border-color: #00529b; /* Green border on hover */
      }
    `
  }}
/>


            <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <Navbar />
            <div className="container" style={{ maxWidth: "1200px", marginTop: "20px" }}>
                <h1 className="display-4 text-center" style={{ margin: "20px 0", marginBottom: "25px" }}>Enter Waitlist</h1>
                <div className="row gx-5">
                    <div className="col-md-7">
                        <div className="p-3 shadow rounded border" style={{ backgroundColor: '#f8f9fa', border: '1px solid #ccc' }}>
                            <div className="input-group mb-3">
                                <span className="input-group-text col-2">First Name</span>
                                <input type="text" className="form-control" value={firstName} onChange={e => setFirstName(e.target.value)} autoFocus />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text col-2">Last Name</span>
                                <input type="text" className="form-control" value={lastName} onChange={e => setLastName(e.target.value)} />
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Student Email" value={email} onChange={e => setEmail(e.target.value)} />
                                <span className="input-group-text">@ufl.edu</span>
                            </div>
                            <div className="input-group mb-3">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Requested Tutor</label>
                                <select className="form-select" id="inputGroupSelect01" value={prefTutor} onChange={e => setPrefTutor(e.target.value)}>
                                    <option value="none">No preference</option>
                                    {tutors.map((tutor, index) => (
                                        <option key={index} value={tutor}>{tutor}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="input-group mb-3">
                                <label className="input-group-text" htmlFor="inputGroupSelect02">Requested Course</label>
                                <select className="form-select" id="inputGroupSelect02" value={subject} onChange={e => setSubject(e.target.value)}>
                                    <option value="" disabled>Select course</option>
                                    <option value="Programming Fundamentals 1">Programming Fundamentals 1</option>
                                    <option value="Programming Fundamentals 2">Programming Fundamentals 2</option>
                                    <option value="Data Structures and Algorithms">Data Structures and Algorithms</option>
                                    <option value="Software Engineering Principles">Software Engineering Principles</option>
                                    <option value="Operating Systems">Operating Systems</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Estimated Session Length</span>
                                <input type="number" className="form-control" placeholder="Length in minutes" value={ets} onChange={e => setEts(e.target.value)} />
                            </div>
                            <div className="input-group mb-3">
                                <textarea className="form-control" placeholder="Notes (optional)" value={notes} onChange={e => setNotes(e.target.value)}></textarea>
                            </div>
                            <div className="text-end">
                                <button onClick={handleSubmit} className="btn btn-outline-dark">Enter Waitlist</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                      <div className="p-3 shadow rounded border info-box column-container" style={{ backgroundColor: '#f8f9fa', border: '1px solid #ccc' }}>
                        <h5>Current Waitlist Size</h5>
                        <p>{currentQueueSize} students</p>
                      </div>
                      <div className="p-3 shadow rounded border info-box column-container" style={{ backgroundColor: '#f8f9fa', border: '1px solid #ccc' }}>
                        <h5>Estimated Wait Time</h5>
                        <p>{averageWaitTime} minutes</p>
                      </div>

                      <div className="text-end">
                          <Link to="/waitlist" className="btn btn-outline-dark">View Waitlist</Link>
                      </div>

                    </div>
                    
                </div>
                
            </div>
        </>
    );
};
