import React, { useEffect, useState } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { startOfWeek, addDays, format, addWeeks, toDate } from 'date-fns';

import { Navbar } from "./navbar";

function Calendar() {
  const getCurrentDate = (date) => {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  const [events, setEvents] = useState([]);
  const [currDay, setCurrDay] = useState(getCurrentDate(new Date()));
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    const fetchDates = async () => {
      try {
        // Fetch operational hours data
        const operationalHoursCollection = await getDocs(collection(db, "operational_dates"));
        operationalHoursCollection.forEach(doc => {
          const data = doc.data();          
          setStartDate(data.startDate.toDate());
          setEndDate(data.endDate.toDate());
        });
      } catch (error) {
        console.error("Error fetching operational dates:", error);
      }
    }
    const fetchEvents = async () => {
      try {
        // Fetch operational hours data
        const operationalHoursCollection = await getDocs(collection(db, "operational_dates"));
        operationalHoursCollection.forEach(doc => {
          const data = doc.data();          
          setStartDate(data.startDate.toDate());
          setEndDate(data.endDate.toDate());
        });
      } catch (error) {
        console.error("Error fetching operational dates:", error);
      }
      
      try {

        const operationalHoursCollection = await getDocs(collection(db, "operational_hours"));
        const eventsData = [];

        operationalHoursCollection.forEach(doc => {
          const data = doc.data();
          const weekday = data.Weekday;
          const mode = data.Mode;
          const hours = data.Hours;
          const dayIndex = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].indexOf(weekday);

          let currentDate = startDate;
          while (currentDate && currentDate <= endDate) {
            if (format(currentDate, 'EEEE') === weekday) {
              const eventDateString = format(currentDate, 'yyyy-MM-dd');
              const startHour = parseInt(hours.split("-")[0]);
              const endHour = parseInt(hours.split("-")[1]);
              // Construct start and end times for the event
              const startTime = `${eventDateString}T${startHour.toString().padStart(2, '0')}:00`;
              const endTime = `${eventDateString}T${endHour.toString().padStart(2, '0')}:00`;

              // Add event to the eventsData array
              eventsData.push({
                title: `${mode} Tutoring (${weekday})`,
                start: startTime,
                end: endTime,
                allDay: false
              });
            }
            currentDate = addDays(currentDate, 1); // Move to the next day
          }
        });

        setEvents(eventsData);
      } catch (error) {
        console.error("Error fetching operational hours:", error);
      }
    };
    fetchDates();
    fetchEvents();
  }, [startDate, endDate]);

  const handleDateSelect = (arg) => {
    setCurrDay(getCurrentDate(arg.start));
  };

  const handleEventClick = (arg) => {
    // arg.event will contain the event object
    const event = arg.event;
  
    // Extract the start date from the event object
    const startDate = new Date(event.start);

    const calendarApi = arg.view.calendar;
    calendarApi.select(startDate);
    
    // Set the current day to the start date of the event
    setCurrDay(getCurrentDate(startDate));
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
          <div className="col-12"></div>
        </div>
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
              Availability on {currDay}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calendar;
