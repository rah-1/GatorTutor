import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {NotFoundPage} from './pages/NotFoundPage';
import {EnterQueuePage} from './pages/EnterQueuePage';
import {TutorsPage} from './pages/TutorsPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<EnterQueuePage />} />
          <Route path="/tutors" element={<TutorsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
