import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Navbar } from "./navbar";
import { Link } from 'react-router-dom';
import { auth } from "../config/firebase";

function EditCalendar() {
    const [currentUserEmail, setCurrentUserEmail] = useState("Student");
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
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

    return (
        <>
          <Navbar />
          <div className="container mt-4">
            <h1 className="display-3 text-center mb-4">Edit Calendar</h1>
            <div className="row">
                <div className={`col-md-6 ${!isAdmin && "bg-light"}`}>
                    <div className={`panel rounded border p-3 mb-3 ${!isAdmin && "opacity-50"}`}>
                        <h2 className="text-center">Admin Panel</h2>
                        {isAdmin ? (
                            <>
                                <p>Admin-only features and settings</p>
                                <DatePicker
                                    selected={startDate}
                                    onChange={handleChange}
                                    startDate={startDate}
                                    endDate={endDate}
                                    selectsRange
                                    customInput={<CustomInput />}
                                    monthsShown={2}
                                />
                            </>
                        ) : (
                            <p className="text-muted">Admin-only features and settings</p>
                        )}
                        <Link to="/save" className="btn btn-success mt-3">Save</Link>
                    </div>
                </div>
                <div className={`col-md-6 ${!isAdmin && !isTutor && "bg-light"}`}>
                    <div className={`panel rounded border p-3 mb-3 ${!isAdmin && !isTutor && "opacity-50"}`}>
                        <h2 className="text-center">Tutors Panel</h2>
                        {isAdmin || isTutor ? (
                            <>
                                <p>Tutor-only features and settings</p>
                                <DatePicker
                                    selected={startDate}
                                    onChange={handleChange}
                                    startDate={startDate}
                                    endDate={endDate}
                                    selectsRange
                                    customInput={<CustomInput />}
                                    monthsShown={2}
                                />
                                
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
        {value || "Change Dates"}
    </button>
);

export default EditCalendar;
