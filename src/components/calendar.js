import React, { useEffect, useState } from 'react';
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import { Navbar } from "./navbar";

function Calendar() {
  const getCurrentDate = () => {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
  };

  const [currDay, setCurrDay] = useState(getCurrentDate());
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
          <div className="col-12">
          </div>
        </div>
        <div className="row">
          <div className="col-8 calendar-container">
            <div className="calendar-column">
              <Fullcalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView={"dayGridMonth"}
                headerToolbar={{
                  start: "today prev,next",
                  center: "title",
                  end: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                height={"90vh"}
                events={[
                  { title: "event 1", date: "2024-04-01" },
                  { title: "event 2", date: "2019-04-02" }
                ]}
              />
            </div>
          </div>
          <div className="col-4 textbox-column">
            <h1 className="display-5" style={{ margin: 20 }}>
              Availability on {currDay}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calendar;
