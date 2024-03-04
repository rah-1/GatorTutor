import './App.css';
import { Auth } from './components/auth';
import { Tutors } from './components/tutors';
import Example from './components/calendar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/tutors" element={<Tutors />} />
          <Route path="/calendar" element={<Example />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
