import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc, updateDoc, deleteDoc, addDoc } from "firebase/firestore";
import { Navbar } from "./navbar"
import { db } from "../config/firebase";
import { storage } from "../config/firebase";
import TutorImageEdit from "./tutor_image_edit"
import TutorImage from "./tutor_image"
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import Tabs from 'react-bootstrap/Tabs'; 
import Tab from 'react-bootstrap/Tab';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import GetAuth from './auth_util';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { ref, uploadBytes, deleteObject} from 'firebase/storage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './tutors.css';



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

function getTimes(hours) {
  if (hours === "none")
  {
    return "None"
  }
  const [startHour, endHour] = hours.split('-').map(time => parseInt(time));

    // Convert start hour to 12-hour format and append "AM" or "PM"
    const formattedStartHour = startHour >= 12 ? (startHour === 12 ? 12 : startHour - 12) : startHour;
    const startPeriod = startHour >= 12 ? ":00 PM" : ":00 AM";

    // Convert end hour to 12-hour format and append "AM" or "PM"
    const formattedEndHour = endHour >= 12 ? (endHour === 12 ? 12 : endHour - 12) : endHour;
    const endPeriod = endHour >= 12 ? ":00 PM" : ":00 AM";

    // Construct the formatted time range string
    return `${formattedStartHour}${startPeriod} - ${formattedEndHour}${endPeriod}`;
}

function getDays(letter) {
  const letterToDay = {
    "M": " Monday",
    "T": " Tuesday",
    "W": " Wednesday",
    "R": " Thursday",
    "F": " Friday"
  };

  return letterToDay[letter];
}


function TutorCard ({ tutor, handleDefault, setItems, items}) {

  const auth = GetAuth();

  const [courses, setCourses] = useState(tutor.courses);

  const [languages, setLanguages] = useState(tutor.languages);

  const [submittedFile, setSubmittedFile] = useState(null);

  const [temp_about, setAbout] = useState(tutor.about);
  
  const [fullname, setFullName] = useState(tutor.name);

  const [major, setMajor] = useState(tutor.major);
  
  const [minor, setMinor] = useState(tutor.minor);
  
  const [class_of, setClassOf] = useState(tutor.class_of);

  const [avail, setAvail] = useState(tutor.avail);

  const handleAvailCheck = (day, checked) => {
    let temp_avail = {...avail};
    if (checked)
    {
      temp_avail[day] = "12-15"
    }
    else{
      temp_avail[day] = "none"
    }
    
    setAvail(temp_avail);
  };

  const handleAvailTime = (day, num, place) => {
    let temp_avail = {...avail};

    const parts = temp_avail[day].split("-");
    
    // Replace the second part with the replacement value
    parts[place] = num;
    
    // Join the parts back together with a dash
    temp_avail[day] = parts.join("-");
    setAvail(temp_avail);
    
  };

  const handleClassChange = (value) => {
    setClassOf(value);
  };

  const handleNameChange = (value) => {
    setFullName(value);
  };

  const handleMajorChange = (value) => {
    setMajor(value);
  };
  
  const handleMinorChange = (value) => {
    setMinor(value);
  };

  const handleInputChange = (index, field, value) => {
    const updatedCourses = [...courses];
    updatedCourses[index] = { ...updatedCourses[index], [field]: value };
    setCourses(updatedCourses);
  };

  const handleSubmit = async  () => {
    tutor.about = temp_about;
    tutor.class_of = class_of;
    tutor.courses = courses;
    tutor.avail = avail;
    tutor.languages = languages;
    tutor.name = fullname;
    tutor.major = major;
    tutor.minor = minor;
    const oldTutorImage = tutor.img_src;
    if(submittedFile)
    {
      tutor.img_src = submittedFile.name;
    }

    try {
      if (handleDefault === null)
      {
        const docRef= doc(db, 'tutors', tutor.id);
        await updateDoc(docRef, tutor);
      }
      else
      {
        delete tutor.id;
        const newDocRef = await addDoc(collection(db, "tutors"), tutor);
        setItems([...items, { id: newDocRef.id, ...tutor }]);
      }
      
    }
    catch (error) {
      toast.error("Failed to save tutor data: " + error.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(error)
    }
    if (submittedFile) {
      const oldImageRef = ref(storage, 'image/' + oldTutorImage);
      
      if (oldTutorImage !== "default.jpg")
      {
        deleteObject(oldImageRef)
        .then(() => {
        })
        .catch((error) => {
          toast.error("Failed to delete old tutor image: " + error.message, {
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
      

      const newImageRef = ref(storage, 'image/' + submittedFile.name);

      uploadBytes(newImageRef, submittedFile)
      .then(() => {
      })
      .catch((error) => {
        toast.error("Failed to upload tutor profile image: " + error.message, {
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
    toast.success("Tutor data successfully saved.", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    if (handleDefault !== null)
    {
      handleDefault();
    }
    setIsEdit(false);  

  };

  const handleDelete = async  () => {
    if (handleDefault !== null)
    {
      handleDefault();
    }
    else
    {
      try {
        const documentRef = doc(db, "tutors", tutor.id);
        await deleteDoc(documentRef);
        toast.success("Tutor data successfully deleted.", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setItems(items.filter(item => item.id !== tutor.id));
      } catch (error) {
        toast.error("Error deleting tutor data: " + error.message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      });
        
    }
  };
}
  

  const handleCancel = async  () => {
    if (handleDefault === null)
    {
      setIsEdit(false);

    }
  };

  const handleLangChange = (index, lang, value) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index] = { ...updatedLanguages[index], 'name': lang };
    updatedLanguages[index] = { ...updatedLanguages[index], 'rating': value };
    setLanguages(updatedLanguages);
  };

  const handleAboutChange = (value) => {
    setAbout(value);
  };

  const handleRemoveCourse = (index) => {
    const updatedCourses = [...courses];
    updatedCourses.splice(index, 1);
    setCourses(updatedCourses);
  };

  const handleAddEmptyCourse = () => {
    setCourses([...courses, { subject: '', ta: false }]);
  };


  const [isEdit, setIsEdit] = useState(handleDefault !== null);

  const handleEditClick = () => {
    setIsEdit(true);
  };

  const TAPill = () => {
    return (
      <Badge className=" rounded-pill ms-auto text-end">
       TA
      </Badge>
    );
  };


  function classOf (year) {
    return (
    <div className="input-group mb-3 ms-auto align-self-end" style={{ width: '7.5rem' }}>
            <span className="input-group-text badge bg-dark ms-auto align-self-end" id="basic-addon1">Class of</span>
            <input maxlength="4"  style={{ height: '1.37rem' }} type="text" className="form-control" value={year}></input>
    </div>
    );
  }


  return (
    <div className="team-member ">
      
      {isEdit ? (
          <Form>
          <Row style={{ justifyContent: "center" }}>
              
            <div className="d-flex">
            {handleDefault === null ? (
              <button type="button" className="me-auto badge btn btn-outline-dark" onClick={handleEditClick} style={{ alignSelf: 'flex-start' }}>Edit</button>
            ) : null}
<div className="input-group mb-3 ms-auto align-self-end" style={{ width: '7.5rem' }}>
                  <span className="input-group-text badge bg-dark ms-auto align-self-end" id="basic-addon1">Class of</span>
                  <input maxlength="4"  style={{ height: '1.37rem' }} type="text" className="form-control" value={class_of} onChange={(e) => handleClassChange(e.target.value)}></input>
              </div>
              
              
            </div>  
            </Row>
            <Row >
            <div className="d-flex" style={{ justifyContent: "center" }}>
            <TutorImageEdit setSubmittedFile={setSubmittedFile} filename={tutor.img_src} />  
            </div>
          </Row> 

          <Row style={{ justifyContent: "center", textAlign: "center" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>
              <InputGroup>   
              <InputGroup.Text>Full Name:</InputGroup.Text>
              <Form.Control
                id="inlineFormInput"
                value={fullname}
                onChange={(e) => handleNameChange(e.target.value)}
              />
              </InputGroup>   
              </ListGroup.Item>
              <ListGroup.Item>
                <InputGroup>
                  <InputGroup.Text>Major:</InputGroup.Text>
                  <Form.Control id="inlineFormInputGroup" value={major} onChange={(e) => handleMajorChange(e.target.value)} />
                </InputGroup>
              </ListGroup.Item>
              <ListGroup.Item>
                <InputGroup className="mb-2">
                  <InputGroup.Text>Minor:</InputGroup.Text>
                  <Form.Control id="inlineFormInputGroup" value={minor} onChange={(e) => handleMinorChange(e.target.value)} />
                </InputGroup>
              </ListGroup.Item>
            </ListGroup>
            
          </Row>
          <Row>
            {/* List group */}
            <Tabs defaultActiveKey={null}>
              <Tab eventKey="about" title="About">
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control value={temp_about} as="textarea" rows={5} onChange={(e) => handleAboutChange(e.target.value)}/>
              </Form.Group>
              </Tab>
              <Tab eventKey="avail" title="Availability" >
              <Alert key="warning" variant="warning" style={{ fontSize: '0.8rem', padding: '0.3rem' }}>
                Please enter your availability by the hour in military time. Check the box if you are working that day.
              </Alert>
              <Table className="text-start">
              <thead>
                <tr>
                  <th scope="col">Day</th>
                  <th scope="col">Hours</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td>{getDays('M')}</td>
                <td>
                        <InputGroup >
                          <InputGroup.Checkbox className='text-end' checked={avail['M'] !== "none" ? true : false} onChange={(e) => handleAvailCheck('M', e.target.checked)}/>  
                          <InputGroup.Text className='px-2'>Start</InputGroup.Text>
                          <Form.Control id="inlineFormInputGroup" maxlength="4" disabled={avail['M'] === "none" ? true : false} value={avail['M'] === "none" ? "" : avail['M'].split("-")[0]} onChange={(e) => handleAvailTime('M', e.target.value, 0)} />
                          <InputGroup.Text className='px-2'>End</InputGroup.Text>
                          <Form.Control id="inlineFormInputGroup" maxlength="4" disabled={avail['M'] === "none" ? true : false} value={avail['M'] === "none" ? "" : avail['M'].split("-")[1]} onChange={(e) => handleAvailTime('M', e.target.value, 1)} />
                        </InputGroup>
                </td>
              </tr>
              <tr>
                <td>{getDays('T')}</td>
                <td>
                        <InputGroup >
                          <InputGroup.Checkbox className='text-end' checked={avail['T'] !== "none" ? true : false} onChange={(e) => handleAvailCheck('T', e.target.checked)}/>  
                          <InputGroup.Text className='px-2'>Start</InputGroup.Text>
                          <Form.Control id="inlineFormInputGroup" maxlength="4" disabled={avail['T'] === "none" ? true : false} value={avail['T'] === "none" ? "" : avail['T'].split("-")[0]} onChange={(e) => handleAvailTime('T', e.target.value, 0)} />
                          <InputGroup.Text className='px-2'>End</InputGroup.Text>
                          <Form.Control id="inlineFormInputGroup" maxlength="4" disabled={avail['T'] === "none" ? true : false} value={avail['T'] === "none" ? "" : avail['T'].split("-")[1]} onChange={(e) => handleAvailTime('T', e.target.value, 1)} />
                        </InputGroup>
                </td>
              </tr>
              <tr>
                <td>{getDays('W')}</td>
                <td>
                <InputGroup >
                          <InputGroup.Checkbox className='text-end' checked={avail['W'] !== "none" ? true : false} onChange={(e) => handleAvailCheck('W', e.target.checked)}/>  
                          <InputGroup.Text className='px-2'>Start</InputGroup.Text>
                          <Form.Control id="inlineFormInputGroup" maxlength="4" disabled={avail['W'] === "none" ? true : false} value={avail['W'] === "none" ? "" : avail['W'].split("-")[0]} onChange={(e) => handleAvailTime('W', e.target.value, 0)} />
                          <InputGroup.Text className='px-2'>End</InputGroup.Text>
                          <Form.Control id="inlineFormInputGroup" maxlength="4" disabled={avail['W'] === "none" ? true : false} value={avail['W'] === "none" ? "" : avail['W'].split("-")[1]} onChange={(e) => handleAvailTime('W', e.target.value, 1)} />
                        </InputGroup>
                    </td>
                  </tr>
                  <tr>
                    <td>{getDays('R')}</td>
                    <td>
                    <InputGroup >
                          <InputGroup.Checkbox className='text-end' checked={avail['R'] !== "none" ? true : false} onChange={(e) => handleAvailCheck('R', e.target.checked)}/>  
                          <InputGroup.Text className='px-2'>Start</InputGroup.Text>
                          <Form.Control id="inlineFormInputGroup" maxlength="4" disabled={avail['R'] === "none" ? true : false} value={avail['R'] === "none" ? "" : avail['R'].split("-")[0]} onChange={(e) => handleAvailTime('R', e.target.value, 0)} />
                          <InputGroup.Text className='px-2'>End</InputGroup.Text>
                          <Form.Control id="inlineFormInputGroup" maxlength="4" disabled={avail['R'] === "none" ? true : false} value={avail['R'] === "none" ? "" : avail['R'].split("-")[1]} onChange={(e) => handleAvailTime('R', e.target.value, 1)} />
                        </InputGroup>
                </td>
              </tr>
              <tr>
                <td>{getDays('F')}</td>
                <td>
                <InputGroup >
                          <InputGroup.Checkbox className='text-end' checked={avail['F'] !== "none" ? true : false} onChange={(e) => handleAvailCheck('F', e.target.checked)}/>  
                          <InputGroup.Text className='px-2'>Start</InputGroup.Text>
                          <Form.Control id="inlineFormInputGroup" maxlength="4" disabled={avail['F'] === "none" ? true : false} value={avail['F'] === "none" ? "" : avail['F'].split("-")[0]} onChange={(e) => handleAvailTime('F', e.target.value, 0)} />
                          <InputGroup.Text className='px-2'>End</InputGroup.Text>
                          <Form.Control id="inlineFormInputGroup" maxlength="4" disabled={avail['F'] === "none" ? true : false} value={avail['F'] === "none" ? "" : avail['F'].split("-")[1]} onChange={(e) => handleAvailTime('F', e.target.value, 1)} />
                        </InputGroup>
                </td>
              </tr>                
              </tbody>
              </Table>
              </Tab>
              <Tab eventKey="course" title="Courses" className='mb-3'>
                <ListGroup className="text-start">

                {courses.map((course, index) => (
                  <ListGroup.Item key={index} className="d-flex">
                    <InputGroup >
                      <Form.Control id="inlineFormInputGroup" value={course.subject} onChange={(e) => handleInputChange(index, 'subject', e.target.value)} />
                      <InputGroup.Checkbox className='text-end' checked={course.ta ? true : false} onChange={(e) => handleInputChange(index, 'ta', e.target.checked)}/>  
                      <InputGroup.Text className='px-1'><TAPill/></InputGroup.Text>
                    </InputGroup>
                    <Button variant="danger" style={{ marginLeft: '0.25rem', marginTop: '0.25rem', marginBottom: '0.25rem', paddingTop: '0.0rem',paddingBottom: '0.0rem', paddingRight: '0.5rem',paddingLeft: '0.5rem', fontSize: '0.9rem' }} className='text-end' onClick={() => handleRemoveCourse(index)}>✕</Button>{' '}
              
                  </ListGroup.Item>  
                ))}
                <ListGroup.Item className="d-flex justify-content-center">
                  <Button variant="primary" className='bg-blue' onClick={handleAddEmptyCourse}>+</Button>{' '}
                </ListGroup.Item>
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
                    {languages.map((language, index) => (
                      <tr>
                        <td>{language.name}</td>
                        <td>
                          <Form.Select aria-label="Default select example" onChange={(e) => handleLangChange(index, language.name, e.target.value)}>
                            <option value={language.rating} selected>{getRating(language.rating)}</option>
                            {[0, 1, 2, 3, 4, 5].map((rating) => (
                              rating !== language.rating && (
                                <option value={rating}>
                                  {getRating(rating)}
                                </option>
                              )
                            ))}
                          </Form.Select>
                        </td>
                      </tr>
                    ))}
                    </tbody>
                  </Table>
              </Tab>
            </Tabs>
            
          </Row>
          <Row>
            <div className="d-flex" >
              <button className="btn btn-outline-danger btn-sm me-auto" type="button" onClick={handleDelete}>Delete Profile</button>
              {handleDefault === null ? (
                <button className="btn btn-outline-secondary btn-sm" type="button" onClick={handleCancel}>Cancel Edit</button>
              ) : null}
              
              <button className="btn bg-blue ms-auto btn-sm ms-auto" type="button" onClick={handleSubmit}>Save Changes</button>
            </div>
          </Row>
          </Form>          

      ) : (
        <div>
        <Row style={{ justifyContent: "center" }}>
            
        <div className="d-flex">

          {auth !== 'Student' && <button type="button" onClick={handleEditClick} className="me-auto badge btn btn-outline-dark" style={{ alignSelf: 'flex-start' }}>Edit</button>}
          <Badge bg="dark" className=" ms-auto align-self-end">Class of {tutor.class_of}</Badge>
          
        </div>
        <TutorImage filename={tutor.img_src} />
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
          <p  style={{ textAlign: 'left' }}>
              {tutor.about}
            </p>
          </Tab>
          <Tab eventKey="avail" title="Availability">
            <Table className="text-start">
              <thead>
                <tr>
                  <th scope="col">Day</th>
                  <th scope="col">Hours</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td>{getDays('M')}</td>
                <td>{getTimes(tutor.avail['M'])}</td>
              </tr>
              <tr>
                <td>{getDays('T')}</td>
                <td>{getTimes(tutor.avail['T'])}</td>
              </tr>
              <tr>
                <td>{getDays('W')}</td>
                <td>{getTimes(tutor.avail['W'])}</td>
              </tr>
              <tr>
                <td>{getDays('R')}</td>
                <td>{getTimes(tutor.avail['R'])}</td>
              </tr>
              <tr>
                <td>{getDays('F')}</td>
                <td>{getTimes(tutor.avail['F'])}</td>
              </tr>                
              </tbody>
            </Table>
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
      )}
          
        </div>
  );
}


export const Tutors3 = () => {
  const [Default, setDefault] = useState(false);
  const [items, setItems] = useState([]);
  const [defaultItem, setDefaultItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = GetAuth();

  async function fetchPost () {
       
    await getDocs(collection(db, "tutors"))
        .then((querySnapshot)=>{               
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            setItems(newData);                
            // console.log(items, newData);
        })

    let singleDoc;    
    const querySnapshot2 = await getDocs(collection(db, "default_tutor"));
    querySnapshot2.forEach((doc) => {
      // Assuming there's only one document in the collection
      singleDoc = { id: doc.id, ...doc.data() };
    });
    setDefaultItem(singleDoc);

        setLoading(false);
   
    }

  useEffect(() => {

    fetchPost();
    
  }, []);

  const handleDefault = () => {
    // Toggle between showing the default tutor card and the button
    setDefault(!Default);
  };

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
  <ToastContainer />
  <Navbar />
  <Container>
    <h1 className="display-3" style={{ margin: 20 }}>
      Meet Your Tutors!
    </h1>
    {loading ? (
      <div class="loader" style={{ margin: '0 auto' }}></div>
    ) : (
      <div className="grid">

      {items.map((item) => (
        <TutorCard key={item.id} tutor={item} handleDefault={null} setItems={setItems} items={items} />
      ))}

{auth !== 'Student' && (
              Default ? (
                <TutorCard tutor={defaultItem} handleDefault={handleDefault} setItems={setItems} items={items}/>
              ) : (
                <button
                  className="team-member btn btn-outline-dark bg-blue"
                  style={{ justifyContent: "center", alignItems: "center", fontSize: "7rem" }}
                  onClick={handleDefault}
                >
                  +
                </button>
              )
            )}



      

    </div>
    )
    }
      
  </Container>
</>
)}
