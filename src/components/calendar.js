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
  }, []);


  useEffect(() => {
    // Ensure both startDate and endDate are set before fetching events
    if (startDate && endDate) {
      const fetchEvents = async () => {
        console.log("DB CALL EVENTS *******************")

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
  }, [startDate, endDate]); // Dependency on startDate and endDate


  

  const handleDateSelect = (arg) => {
    setCurrDay(getCurrentDate(arg.start));
    setSelectedEvent(null); // Reset selected event when changing date
    
  };

  const handleEventClick = (arg) => {
    const event = arg.event;
    const startDate = new Date(event.start);

    const calendarApi = arg.view.calendar;
    calendarApi.select(startDate);
    
    setCurrDay(getCurrentDate(startDate));
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
            {selectedEvent && (
              <div style={{ margin: 20 }}>
                <p><strong>Mode:</strong> {selectedEvent.title}</p>
                <p><strong>Start Time:</strong> {selectedEvent.startTime}</p>
                <p><strong>End Time:</strong> {selectedEvent.endTime}</p>
              </div>
            )}
            <h1 className="display-6" style={{ margin: 20 }}>
              Availability Changes
            </h1>
            <div style={{ margin: 20 }}>
                <p>No reported changes. </p>
                </div>
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

