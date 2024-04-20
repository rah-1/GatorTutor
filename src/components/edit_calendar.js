import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Navbar } from "./navbar";
import { auth } from "../config/firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditCalendar() {
    const [currentUserEmail, setCurrentUserEmail] = useState("Student");
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [holiday, setHoliday] = useState(null); // New state for single holiday selection

    const handleChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const handleHolidayChange = (date) => {
        setHoliday(date); // Update holiday state
    };

    useEffect(() => {
        const authDict = {
          "cise_tutor@ufl.edu": "Tutor",
          "cise_admin@ufl.edu": "Admin"
        };
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUserEmail(user ? (authDict[user.email] || "Student") : "Student");
        });
        return () => unsubscribe();
    }, []);

    const isAdmin = currentUserEmail === "Admin";
    const isTutor = currentUserEmail === "Tutor";

    const handleSaveClick = () => {
        toast.success("Changes saved successfully!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
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
                    color: #28a745; /* Green text color to match the border */
                    background-color: #fff; /* White background initially */
                    border-color: #28a745; /* Green border */
                    
                }
                
                .btn.btn-outline-dark:hover {
                    color: #fff; /* White text on hover */
                    background-color: #28a745; /* Green background on hover */
                    border-color: #28a745; /* Green border on hover */
                }
                  
                  `
            }}
            />
          <Navbar />
          <ToastContainer />
          <div className="container mt-4">
            <h1 className="display-3 text-center mb-4">Edit Calendar</h1>
            <div className="row">
                <div className={`col-md-6 ${!isAdmin && "bg-light"}`}>
                    <div className={`panel rounded border p-3 mb-3 ${!isAdmin && "opacity-50"}`}>
                        <h2 className="text-center">Admin Panel</h2>
                        {isAdmin ? (
                            <>
                                <p>Change tutoring date range for this semester:</p>
                                <DatePicker
                                    selected={startDate}
                                    onChange={handleChange}
                                    startDate={startDate}
                                    endDate={endDate}
                                    selectsRange
                                    customInput={<CustomInput />}
                                    monthsShown={2}
                                />
                                <p>Add tutoring holidays:</p>
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
                <div className={`col-md-6 ${!isAdmin && !isTutor && "bg-light"}`}>
                    <div className={`panel rounded border p-3 mb-3 ${!isAdmin && !isTutor && "opacity-50"}`}>
                        <h2 className="text-center">Tutors Panel</h2>
                        {isAdmin || isTutor ? (
                            <>
                                <p>Change tutor availability:</p>
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
