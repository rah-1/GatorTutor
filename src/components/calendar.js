import React, { useEffect, useState } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Link } from 'react-router-dom';
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { startOfWeek, addDays, format, addWeeks, toDate } from 'date-fns';
import { auth } from "../config/firebase";

import { Navbar } from "./navbar";

function Calendar() {
  const getCurrentDate = (date) => {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  const [events, setEvents] = useState([]);
  const [currentUserEmail, setCurrentUserEmail] = useState("Student");
  const [currDay, setCurrDay] = useState(getCurrentDate(new Date()));
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null); // New state for storing selected event details
  const [holidays, setHolidays] = useState(new Set());
  const [availabilityChanges, setAvailabilityChanges] = useState(new Map());


  useEffect(() => {
    const fetchAvailabilityChanges = async () => {
        try {
            const updatesCollectionRef = collection(db, "avail_updates");
            const snapshot = await getDocs(updatesCollectionRef);
            const updatesMap = new Map();

            snapshot.forEach(doc => {
                const data = doc.data();
                const formattedDate = format(data.date.toDate(), 'yyyy-MM-dd');
                
                const existingEntries = updatesMap.get(formattedDate) || [];
                existingEntries.push({
                    name: data.name,
                    change: data.change
                });
                
                updatesMap.set(formattedDate, existingEntries);
            });

            setAvailabilityChanges(updatesMap);
        } catch (error) {
            console.error("Error fetching availability updates:", error);
        }
    };

    fetchAvailabilityChanges();
}, []);


  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const holidaysRef = collection(db, "holidays");
        const holidayDocs = await getDocs(holidaysRef);
        const holidayDates = new Set();
        holidayDocs.forEach(doc => {
          const holidayDate = doc.data().date.toDate();
          holidayDates.add(format(holidayDate, 'yyyy-MM-dd')); // Store dates as strings in the Set
        });
        setHolidays(holidayDates);
      } catch (error) {
        console.error("Error fetching holidays:", error);
      }
    };

  fetchHolidays();
}, []);

  useEffect(() => {
    
    const authDict = {
      "cise_tutor@ufl.edu": "Tutor",
      "cise_admin@ufl.edu": "Admin"
    };
    const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          setCurrentUserEmail(authDict[user.email]);
        } else {
            setCurrentUserEmail("Student");
        }
    });

    const fetchDates = async () => {
      try {
        console.log("DB CALL DATES *******************")
        setStartDate(new Date(2024, 0, 15));
        setEndDate(new Date(2024, 3, 27));

        const operationalHoursCollection = await getDocs(collection(db, "operational_dates"));
        operationalHoursCollection.forEach(doc => {
          const data = doc.data();          
          setStartDate(data.startDate.toDate());
          setEndDate(data.endDate.toDate());
        });
      } catch (error) {
        console.error("Error fetching operational dates:", error);
      }
    };

    
    fetchDates();

    const today = new Date();
    handleDateSelect({ start: today });
  }, []);


  useEffect(() => {
    if (startDate && endDate && holidays.size > 0) { // Ensure holidays are loaded
      const fetchEvents = async () => {
        console.log("DB CALL EVENTS *******************");
        try {
          const operationalHoursCollection = await getDocs(collection(db, "operational_hours"));
          const eventsData = [];
  
          operationalHoursCollection.forEach(doc => {
            const data = doc.data();
            const weekday = data.Weekday;
            const mode = data.Mode;
            const hours = data.Hours;
  
            let currentDate = startDate;
            while (currentDate && currentDate <= endDate) {
              if (format(currentDate, 'EEEE') === weekday) {
                const eventDateString = format(currentDate, 'yyyy-MM-dd');
                if (!holidays.has(eventDateString)) { // Check if the current date is a holiday
                  const startHour = parseInt(hours.split("-")[0]);
                  const endHour = parseInt(hours.split("-")[1]);
                  const startTime = `${eventDateString}T${startHour.toString().padStart(2, '0')}:00`;
                  const endTime = `${eventDateString}T${endHour.toString().padStart(2, '0')}:00`;
  
                  eventsData.push({
                    title: `${mode} Tutoring (${weekday})`,
                    start: startTime,
                    end: endTime,
                    allDay: false
                  });
                }
              }
              currentDate = addDays(currentDate, 1);
            }
          });
  
          setEvents(eventsData);

          
        } catch (error) {
          console.error("Error fetching operational hours:", error);
        }
      };
  
      fetchEvents();
    }
  }, [startDate, endDate, holidays]); // Add holidays to the dependencies array
  


  

  const handleDateSelect = (arg) => {
    const selectedDate = format(new Date(arg.start), 'yyyy-MM-dd');
    setCurrDay(getCurrentDate(arg.start));
    const changesForDay = availabilityChanges.get(selectedDate);
    const eventsForDay = events.filter(event => format(new Date(event.start), 'yyyy-MM-dd') === selectedDate);
    
    if (eventsForDay.length === 0) {
        setSelectedEvent(null);
    } else {
        setSelectedEvent({
            title: eventsForDay[0].title,
            startTime: new Date(eventsForDay[0].start).toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            }),
            endTime: new Date(eventsForDay[0].end).toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            }),
            changes: changesForDay || []
        });
    }
};



const handleEventClick = (arg) => {
    const event = arg.event;
    const startDate = new Date(event.start);
    const selectedDate = format(startDate, 'yyyy-MM-dd');

    setCurrDay(getCurrentDate(startDate));
    const changesForDay = availabilityChanges.get(selectedDate);
    setSelectedEvent({
        title: event.title,
        startTime: new Date(event.startStr).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        }),
        endTime: new Date(event.endStr).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        }),
        changes: changesForDay || []
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
          __html: `
          .calendar-container {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .calendar-column {
            width: 90%;
            margin-right: 20px;
            padding-top: 10px;
          }

          .textbox-column {
            flex: 1;
          }

          .left-justified-indented {
              text-align: left;
              padding-left: 20px; /* Adjust the indentation as needed */
          }

          .centered-text {
              text-align: center;
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
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-8 calendar-container">
            <div className="calendar-column">
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                selectable="true"
                initialView={"dayGridMonth"}
                headerToolbar={{
                  start: "today prev,next",
                  center: "title",
                  end: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                height={"90vh"}
                events={events}
                select={handleDateSelect}
                eventClick={handleEventClick} 
              />
            </div>
          </div>
          <div className="col-4 textbox-column">
    <h1 className="display-6" style={{ margin: 20 }}>
        Tutoring on {currDay}
    </h1>
    {selectedEvent ? (
                <div style={{ margin: 20 }}>
                    <p className="left-justified-indented"><strong>Mode:</strong> {selectedEvent.title}</p>
                    <p className="left-justified-indented"><strong>Start Time:</strong> {selectedEvent.startTime}</p>
                    <p className="left-justified-indented"><strong>End Time:</strong> {selectedEvent.endTime}</p>
                    {selectedEvent.changes.length > 0 && (
                        <div>
                            <h2 className="display-6 centered-text" style={{ marginBottom: '20px' }}>Availability Changes</h2>
                            {selectedEvent.changes.map((change, index) => (
                                <p key={index} className="left-justified-indented"><strong>{change.name}:</strong> {change.change}</p>
                            ))}
                        </div>
                    )}
                </div>
            ) : (
                <p className="centered-text" style={{ margin: 20 }}>No tutoring available.</p>
            )}
    <div className="text-center">
        {currentUserEmail === 'Admin' || currentUserEmail === 'Tutor' ? (
            <Link to="/edit-calendar" className="btn btn-outline-dark">Edit Calendar</Link>
        ) : null}
    </div>
</div>



        </div>
      </div>
    </>
  );
}

export default Calendar;

