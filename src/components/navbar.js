import UF_Logo from '../images/uf.png';
import { Link, useLocation } from 'react-router-dom';
import { auth } from "../config/firebase";
import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


export const Navbar = () => {
  const location = useLocation();

  const [currentUserEmail, setCurrentUserEmail] = useState("Student");
  const [queueSize, setQueueSize] = useState(0);  // State to hold the queue size

  useEffect(() => {
    const fetchQueueSize = async () => {
        const queueRef = collection(db, "queue");
        const snapshot = await getDocs(queueRef);
        setQueueSize(snapshot.size);
    };

    const handleWaitlistUpdate = (event) => {
        setQueueSize(prevSize => prevSize + event.detail.size);
    };

    document.addEventListener('update-waitlist', handleWaitlistUpdate);
    fetchQueueSize();

    return () => {
        document.removeEventListener('update-waitlist', handleWaitlistUpdate);
    };
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


    return () => unsubscribe();
}, []);
    return (
        <>
        <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossOrigin="anonymous"
  />
  <link
    href="https://code.jquery.com/jquery-3.2.1.slim.min.js"
    rel="stylesheet"
    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    crossOrigin="anonymous"
  />
  <link
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js"
    rel="stylesheet"
    integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4"
    crossOrigin="anonymous"
  />
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
    rel="stylesheet"
    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
    crossOrigin="anonymous"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n\n.team-member {\n            border: 1px solid #ccc;\n            border-radius: 8px;\n            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n            margin: 20px;\n            padding: 20px;\n            display: flex;\n            flex-direction: column;\n        \n        }\n        .team-member row {\n            display: flex;\n        }\n\n    .nav-tabs .nav-item .nav-link{\n        padding-right: 0.75rem; /* Adjust the right margin */\n        padding-left: 0.75rem;\n        color: #00529b !important;\n    }\n        \n        .team-member col {\n            flex: 1;\n            padding: 20px;\n        }\n        .grid {\n        display: grid;\n        grid-auto-rows: auto;\n        max-width: 100vw;\n        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n        }\n        .team-member img {\n            width: 50%;\n            height: 9.5rem;\n            border-radius: 50%;\n            margin-bottom: 10px;\n        }\n\n        .team-member .tab-content{\n\n          margin-top: 0.75rem;\n\n        }\n\n        .team-member h2 {\n            margin-top: 0;\n        }\n\n  .navop2 {\n          border: 3px solid black;\n        }\n\n\n        .logo {\n            width: 8% !important;\n            height: auto !important;\n        }\n\n        .test {\n            padding-left: 0px !important;\n            padding-top: 0px !important;\n            padding-bottom: 0px !important;\n            padding-right: 0px !important;\n        }\n\n        .pgtitle {\n            color: #00529b;\n        }\n\n        .cont {\n            align-items: stretch;\n            }\n\n        .item {\n            flex:  1;\n            /* Optional: Add additional styling as needed */\n            }\n\n        .cont2 {\n            align-items: stretch;\n        }\n\n        .item2 {\n            flex:  1;\n            display: flex;\n            align-items: center;\n            flex-grow: 1;\n            width: 100%;\n            /* Optional: Add additional styling as needed */\n            }\n\n            .navbar-color {\n                background: #00529b;\n            }\n\n            .navop {\n            /* border: 2px solid black; */\n            margin-right: 30px;\n            border-radius: 6px;\n            color: #fff !important;\n            background-color: #00529b ;\n            \n            }\n\n            .rounded-pill {\n              background-color: #00529b !important;\n            }\n\n        .navop:hover {\n           transition: 0s ;\n           background-color: #f37021 ;\n           /* color: #00529b !important; */\n         }\n\n         .navop:active {\n           /* background-color: #f37021; */\n           transition: 0s ;\n           background-color: rgba(243, 112, 33, 0.7);\n           /* color: #00529b !important; */\n         }\n\n        .navbar {\n            \n            font-weight: bold;\n        }\n\n        .badge.bg-dark {\n          \n          background-color: #00529b !important;\n        }\n\n        .badge.btn.btn-outline-dark\n        {\n          color: #00529b;\n          border-color: #00529b;\n        }\n\n        .badge.btn.btn-outline-dark:hover\n        {\n          color: white;\n          background-color: #00529b;\n        }\n\n        .title-background {\n      background: white;\n    }\n        \n\n\n\n\n"
    }}
  />
    <nav className="navbar cont test navbar-expand-lg navbar-dark navbar-color my-0 py-0 pl-0">
          
    <img className="logo mr-0 py-0 my-0" src={UF_Logo} alt="UF Logo" />
    
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-target="#navbarCollapse"
      aria-controls="navbarCollapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div
      className="cont2 item collapse navbar-collapse flex-column align-items-end my-0"
      id="navbarCollapse"
    >
      {/* navbar1 */}
      <div
        className="item2  title-background mr-auto "
        style={{ paddingLeft: "1%" }}
      >
        <div className="  navbar-nav mb-lg-0 mr-auto ">
          <h2 className="pgtitle">CISE ACADEMIC TUTORING CENTER</h2>
        </div>
      </div>
      {/* navbar2 */}
      <div className="item2 d-flex " style={{ paddingLeft: "1%" }}>
        <ul className=" navbar-nav mt-0 mr-auto ">
          <li className="nav-item dropdown">
            <a
              className="navop nav-link dropdown-toggle"
              href="/"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ backgroundColor: location.pathname === '/' || location.pathname === '/waitlist' ? "#f37021" : "" }}
            >
              Waitlist{" "}
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/">
                Enter Waitlist
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="/waitlist">
                View Waitlist{" "}
                <span className="badge bg-primary rounded-pill ms-auto">{queueSize}</span>
              </a>
            </div>
          </li>
          <li className="nav-item">
          <a
              className="nav-link navop"
              href="/calendar"
              style={{ backgroundColor: location.pathname === '/calendar' ? "#f37021" : "" }}
            >
              Calendar{" "}
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link navop"
              href="/tutors"
              style={{ backgroundColor: location.pathname === '/tutors' ? "#f37021" : "" }}
            >
              Tutors
            </a>
          </li>
          <li className="nav-item">
          <a
              className="nav-link navop"
              href="/resources"
              style={{ backgroundColor: location.pathname === '/resources' ? "#f37021" : "" }}
            >
              Resources
            </a>
          </li> 
          {/*
          <li className="nav-item">
          <a
              className="nav-link navop"
              href="/analytics"
              style={{ backgroundColor: location.pathname === '/analytics' ? "#f37021" : "" }}
            >
              Analytics
            </a>
          </li> 
          */}
        </ul>
        <Link to="/auth" className="nav-link navop ms-auto" style={{ paddingRight: "20px" }}>
          Hi,  {currentUserEmail}!
        </Link>
        
        {/* 
                          <form class="ml-auto form-inline pr-3 my-2 my-lg-0">
                              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                          </form> */}
      </div>
    </div>
  </nav>
  </>
    )
}