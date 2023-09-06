import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PublicAnnouncement from "./component/Public_announcement";
import AboutUs from "./component/AboutUs";



function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route excet path="/" element={<PublicAnnouncement />} />
        </Routes>
        <Routes>
          <Route  path="/about" element={<AboutUs   />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
