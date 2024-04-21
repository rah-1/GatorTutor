import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Navbar } from "./navbar";
import { auth } from "../config/firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from "../config/firebase";
import { Timestamp, doc, updateDoc, addDoc, collection, getDocs } from 'firebase/firestore'; // Importing Timestamp directly from firestore module




function EditCalendar() {
    const [currentUserEmail, setCurrentUserEmail] = useState("Student");
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [holiday, setHoliday] = useState(null); // New state for single holiday selection
    const [selectedTutor, setSelectedTutor] = useState(null); // State variable for selected tutor
    const [availabilityReason, setAvailabilityReason] = useState(null); // State variable for availability change reason
    const [tutors, setTutors] = useState([]);



    const handleChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const resetForm = () => {
        setStartDate(null);
        setEndDate(null);
        setHoliday(null);
        setSelectedTutor(null);
        setAvailabilityReason(null);
    };

    const handleHolidayChange = (date) => {
        setHoliday(date); // Update holiday state
    };
    

    const isAdmin = currentUserEmail === "Admin";
    const isTutor = currentUserEmail === "Tutor";

    useEffect(() => {
        const authDict = {
            "cise_tutor@ufl.edu": "Tutor",
            "cise_admin@ufl.edu": "Admin"
        };
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUserEmail(user ? (authDict[user.email] || "Student") : "Student");
        });

        const fetchTutors = async () => {
            const tutorList = [];
            const tutorsRef = collection(db, "tutors");
            const snapshot = await getDocs(tutorsRef);
            snapshot.forEach(doc => {
                tutorList.push(doc.data().name);
            });
            setTutors(tutorList);
        };

        fetchTutors();

        return () => unsubscribe();
    }, []); // Empty dependency array ensures this runs only once on component mount


    const handleSaveClick = () => {
    if (isAdmin) {
        if (startDate && endDate) {
            const calendarSettingsRef = doc(db, "operational_dates", "YHnd5VDYpS3kStkbREi1");

            updateDoc(calendarSettingsRef, {
                startDate: Timestamp.fromDate(new Date(startDate)),
                endDate: Timestamp.fromDate(new Date(endDate))
            })
            .then(() => {
                if (!holiday) {
                    toast.success("Changes saved successfully!", {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    resetForm();  // Reset form here
                }
            })
            .catch(error => {
                toast.error("Error saving changes: " + error.message, {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
        }
        if (holiday) {
            const holidaysRef = collection(db, "holidays");

            addDoc(holidaysRef, {
                date: Timestamp.fromDate(new Date(holiday))
            })
            .then(() => {
                toast.success("Holiday added successfully!", {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                resetForm();  // Reset form here
            })
            .catch(error => {
                toast.error("Error adding holiday: " + error.message, {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
        }
    } else if (isTutor) {
        if (selectedTutor && availabilityReason && startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            let date = new Date(start);
            let updatesMade = false;

            while (date <= end) {
                const updatesRef = collection(db, "avail_updates");

                addDoc(updatesRef, {
                    change: availabilityReason,
                    name: selectedTutor,
                    date: Timestamp.fromDate(new Date(date))
                }).then(() => {
                    if (!updatesMade) {
                        updatesMade = true;
                        toast.success(`Availability updated successfully!`, {
                            position: "bottom-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        resetForm();  // Reset form here
                    }
                }).catch(error => {
                    toast.error(`Error updating availability: ${error.message}`, {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                });

                date.setDate(date.getDate() + 1);
            }
        }
    }
};

    
    
    

    const handleTutorChange = (event) => {
        setSelectedTutor(event.target.value); // Update selected tutor state
    };
    
    const handleReasonChange = (event) => {
        setAvailabilityReason(event.target.value); // Update availability reason state
    };
    

    return (
        <>
         <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossOrigin="anonymous"
        />
        <style
            dangerouslySetInnerHTML={{
            __html:
                `
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

                .form-select {
                    width: 200px; /* Adjust the width as needed */
                    padding-bottom: 100px; /* Add bottom padding */
                }

                .datepicker-spacing {
                    margin-bottom: 20px; /* Add space here */
                }
                  
                  `
            }}
            />
          <Navbar />
          <ToastContainer />
          <div className="container mt-4">
            <h1 className="display-3 text-center mb-4">Edit Calendar</h1>
            <div className="row">
                <div className={`col-md-6 ${!isAdmin && "bg-light opacity-50"}`}>
                <div className={`panel rounded border ${isAdmin ? "shadow" : ""} p-3 mb-3`}>
                        <h2 className="text-center">Admin Panel</h2>
                        {isAdmin ? (
                            <>
                                <p>Change tutoring date range for the semester:</p>
                                <DatePicker
                                    selected={startDate}
                                    onChange={handleChange}
                                    startDate={startDate}
                                    endDate={endDate}
                                    selectsRange
                                    customInput={<CustomInput />}
                                    monthsShown={2}
                                />
                                <div className="datepicker-spacing"></div> {/* Add space here */}
                                <p>Add tutoring holiday:</p>
                                <DatePicker
                                    selected={holiday}
                                    onChange={handleHolidayChange}
                                    customInput={<CustomInput />}
                                />
                                <div className="text-end">
                                    <button className="btn btn-outline-dark ms-auto" onClick={handleSaveClick}>Save Changes</button>
                                </div>
                            </>
                        ) : (
                            <p className="text-muted">Admin-only features and settings</p>
                        )}
                    </div>
                </div>
                <div className={`col-md-6 ${!isTutor && "bg-light opacity-50"}`}>
                <div className={`panel rounded border ${isTutor ? "shadow" : ""} p-3 mb-3`}>
                <h2 className="text-center">Tutors Panel</h2>
                        {!isAdmin || isTutor ? (
                            <>
                                <p>Change tutor availability:</p>
                                <select className="form-select" value={selectedTutor || ''} onChange={handleTutorChange} style={{ width: '75%', margin: 'auto' }}>
                                    <option value="" disabled>Select tutor</option>
                                    {tutors.map(tutor => (
                                        <option key={tutor} value={tutor}>{tutor}</option>
                                    ))}
                                </select>


                                <input type="text" className="form-control mt-2" placeholder="Describe availability change" style={{ width: '75%', margin: 'auto' }} onChange={handleReasonChange} />

                                <div style={{ marginBottom: '20px' }}></div>
                                <DatePicker
                                    selected={startDate}
                                    onChange={handleChange}
                                    startDate={startDate}
                                    endDate={endDate}
                                    selectsRange
                                    customInput={<CustomInput />}
                                    monthsShown={2}
                                />  
                
                <div className="text-end">
                    <button className="btn btn-outline-dark ms-auto" onClick={handleSaveClick}>Save Changes</button>
                </div>
            </>
        ) : (
            <p className="text-muted">Tutor-only features and settings</p>
        )}
    </div>
</div>

            </div>
          </div>
        </>
    );
}

const CustomInput = ({ value, onClick }) => (
    <button className="custom-input" onClick={onClick}>
        {value || "Select Dates"}
    </button>
);

export default EditCalendar;
