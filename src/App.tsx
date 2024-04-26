import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// Import components
import Header from './components/Header';
import Landing from './components/Landing';
import Booking from './components/Booking';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/schedule-appointment" element={<Booking />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;