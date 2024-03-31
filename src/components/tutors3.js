import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { Navbar } from "./navbar"
import { db } from "../config/firebase";
import Rah from '../images/rahjpg.jpg';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import Tabs from 'react-bootstrap/Tabs'; 
import Tab from 'react-bootstrap/Tab';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';



function getRating(num) {
  const numToString = {
    0: " None",
    1: " Elementary",
    2: " Basic",
    3: " Intermediate",
    4: " Advanced",
    5: " Proficient"
  };

  let res = "";
  for (let i = 0; i < 5; i++) {
    if (i < num) {
        res += "★";
    } else {
        res += "☆";
    }
  }

  res += numToString[num];

  return res;
}


function TutorCard ({ tutor }) {

  const TAPill = () => {
    return (
      <Badge className=" rounded-pill ms-auto text-end">
       TA
      </Badge>
    );
  };


  return (
    <div className="team-member ">
          <Row style={{ justifyContent: "center" }}>
            
            <div className="d-flex">
              <Badge bg="dark" className=" ms-auto align-self-end">Class of {tutor.class_of}</Badge>
              
            </div>
            <img
              style={{ alignSelf: "center" }}
              src={Rah}
              alt="Team Member 1"
            />
          </Row>
          <Row style={{ justifyContent: "center", textAlign: "center" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h1 className="display-6" style={{ fontSize: "2rem" }}>
                  {tutor.name}
                </h1>
              </ListGroup.Item>
              <ListGroup.Item>
                <h1 className="display-6" style={{ fontSize: "1.5rem" }}>
                  Major: {tutor.major}
                </h1>
              </ListGroup.Item>
              <ListGroup.Item>
                <h1 className="display-6" style={{ fontSize: "1.3rem" }}>
                  Minor: {tutor.minor}
                </h1>
              </ListGroup.Item>
            </ListGroup>
            
          </Row>
          <Row>
            {/* List group */}
            <Tabs defaultActiveKey={null}>
              <Tab eventKey="about" title="About">
              <p>
                  {tutor.about}
                </p>
              </Tab>
              <Tab eventKey="avail" title="Availability">
                None...
              </Tab>
              <Tab eventKey="course" title="Courses">
                <ListGroup className="text-start">

                  {tutor.courses.map((course) => (
                  <ListGroup.Item className="d-flex">
                    {course.subject}
                    {course.ta && <TAPill />}
                  </ListGroup.Item>  
                  ))}

                </ListGroup>
              </Tab>
              <Tab eventKey="lang" title="Languages">
                <Table className="text-start">
                    <thead>
                      <tr>
                        <th scope="col">Language</th>
                        <th scope="col">Proficiency</th>
                      </tr>
                    </thead>
                    <tbody>
                    {tutor.languages.map((language) => (
                      <tr>
                        <td>{language.name}</td>
                        <td>{getRating(language.rating)}</td>
                      </tr>
                    ))}
                    </tbody>
                  </Table>
              </Tab>
            </Tabs>
            
          </Row>
        </div>
  );
}


export const Tutors3 = () => {
  const [items, setItems] = useState([]);

  async function fetchPost () {
       
    await getDocs(collection(db, "tutors"))
        .then((querySnapshot)=>{               
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            setItems(newData);                
            console.log(items, newData);
        })
   
    }

  useEffect(() => {

    fetchPost();
    
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
  <Navbar />
  <Container>
    <h1 className="display-3" style={{ margin: 20 }}>
      Meet Your Tutors!
    </h1>
    <div className="grid">

      {items.map((item) => (
        <TutorCard key={item.id} tutor={item} />
      ))}

    </div>
  </Container>
  {/* Add more team members as needed */}
</>
)}
