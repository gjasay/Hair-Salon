import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import components
import Header from "./components/Header";
import Landing from "./components/Landing";
import Booking from "./components/Booking";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex-grow overflow-auto">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/schedule-appointment" element={<Booking />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
