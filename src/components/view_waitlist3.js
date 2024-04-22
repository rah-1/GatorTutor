import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { Navbar } from "./navbar";
import { db, auth } from "../config/firebase";
import Table from 'react-bootstrap/Table';
import { FaEnvelope, FaTimes } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';

function WaitlistItem({ item, index, isAdminOrTutor, onDelete }) {
  const getInitials = (firstName, lastName) => {
    return `${firstName.charAt(0).toUpperCase()}${firstName.slice(1, 2).toLowerCase()} ${lastName.charAt(0).toUpperCase()}${lastName.slice(1, 2).toLowerCase()}`;
  };

  const getTime = (time) => {
    const date = new Date(time.seconds * 1000);
    return date.toLocaleTimeString('en-US', { timeZone: 'America/New_York' });
  };

  const sendEmail = () => {
    const templateParams = {
      to_email: item.email,
      to_name: `${item.first} ${item.last}`,
      message: "Your tutoring session is ready! Please join your session here:\nhttps://ufl.zoom.us/j/2132439736", // Customize your message or add more parameters
    };

    emailjs.send('service_8lcffmn', 'template_6hvcgor', templateParams, 'MIktgyoKvQSNMj_Qg')
      .then((response) => {
        console.log('Email successfully sent!', response.status, response.text);
        toast.success(`Email sent to ${item.first} ${item.last}!`);
      }, (err) => {
        console.error('Failed to send the email:', err);
        toast.error("Failed to send email.");
      });
  };

  return (
    <tr>
      <td>#{index}</td>
      <td>{getInitials(item.first, item.last)}</td>
      <td>{getTime(item.time)}</td>
      <td>{item.pref_tutor}</td>
      <td>{item.subject}</td>
      <td>{item.ets} minutes</td>
      {isAdminOrTutor && (
        <td>
          <FaEnvelope style={{ cursor: 'pointer', marginRight: '10px' }} onClick={sendEmail} />
          <FaTimes style={{ cursor: 'pointer', color: 'red' }} onClick={() => onDelete(item.id, item.first, item.last)} />
        </td>
      )}
    </tr>
  );
}


export const Waitlist2 = () => {
  const [items, setItems] = useState([]);
  const [isAdminOrTutor, setIsAdminOrTutor] = useState(false);

  const authDict = {
    "cise_tutor@ufl.edu": "Tutor",
    "cise_admin@ufl.edu": "Admin"
  };
  

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "queue"));
      const fetchedItems = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      // Sort items by time
      fetchedItems.sort((a, b) => a.time.seconds - b.time.seconds);
      setItems(fetchedItems);
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      const isAuthorized = user && (authDict[user.email] === 'Admin' || authDict[user.email] === 'Tutor');
      setIsAdminOrTutor(isAuthorized);
    });

    fetchPosts();
    return () => unsubscribe();
}, []);


  const handleDelete = async (id, firstName, lastName) => {
    try {
      await deleteDoc(doc(db, "queue", id));
      setItems(items.filter(item => item.id !== id));
      toast.success(`${firstName} ${lastName} removed from queue.`);
    } catch (error) {
      toast.error("Failed to delete entry.");
    }
  };

  return (
    <>
      <ToastContainer position="bottom-center" autoClose={5000} />
      <Navbar />
      <div className="container-md" style={{ width: "70%" }}>
        <h1 className="display-3" style={{ margin: 20, textAlign: "center" }}>Active Waitlist</h1>
        <Table hover bordered>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Initials</th>
              <th scope="col">Check-In Time</th>
              <th scope="col">Requested Tutor</th>
              <th scope="col">Requested Course</th>
              <th scope="col">Estimated Time</th>
              {isAdminOrTutor && <th scope="col"></th>}
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <WaitlistItem key={item.id} item={item} index={index + 1} isAdminOrTutor={isAdminOrTutor} onDelete={handleDelete} />
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};
