

import { Navbar } from "./navbar";

function Analytics() {

 


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
      
      <h1 className="display-3" style={{ margin: 20, textAlign: "center" }}>Tutoring Data Analytics</h1>

    </>
  );
}

export default Analytics;

