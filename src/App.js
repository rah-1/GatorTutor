import './App.css';
import { Auth } from './components/auth';
import { Tutors } from './components/tutors';
import { Resources } from './components/resources';
import Example from './components/calendar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Test from './components/test';
import { ViewWaitlist } from './components/view_waitlist';
import { EnterWaitlist } from './components/enter_waitlist';
import { Waitlist } from './components/view_waitlist2';
import { Waitlist2 } from './components/view_waitlist3';
import {Tutors2} from './components/tutors2';
import {Tutors3} from './components/tutors3';
import EditCalendar from './components/edit_calendar';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<EnterWaitlist />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/waitlist" element={<Waitlist2 />} />
          <Route path="/waitlist3" element={<ViewWaitlist />} />
          <Route path="/tutors" element={<Tutors3 />} />
          <Route path="/calendar" element={<Example />} />
          <Route path="/edit-calendar" element={<EditCalendar />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/test" element={<Test />} />
          <Route path="/waitlist2" element={<Waitlist />} />
          <Route path="/tutors2" element={<Tutors2 />} />
          <Route path="/tutors3" element={<Tutors3 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
