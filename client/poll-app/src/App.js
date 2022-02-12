import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import NewPoll from './pages/new-poll';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="new-poll" element={<NewPoll />} />
      </Routes>
    </div>
  );
}

export default App;
