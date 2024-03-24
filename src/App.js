import './App.css';
import { Auth } from './components/auth';
import { Tutors } from './components/tutors';
import { Resources } from './components/resources';
import Example from './components/calendar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Test from './components/test';
import { ViewWaitlist } from './components/view_waitlist';
import { EnterWaitlist } from './components/enter_waitlist';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<EnterWaitlist />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/waitlist" element={<ViewWaitlist />} />
          <Route path="/tutors" element={<Tutors />} />
          <Route path="/calendar" element={<Example />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
