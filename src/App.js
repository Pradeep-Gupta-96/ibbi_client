import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PublicAnnouncement from "./component/Public_announcement";
import AboutUs from "./component/AboutUs";
import HomePage from "./HomePage/HomePage";
import Footer from "./footer/Footer";
import Signup from "./Auth/Signup";
import Signin from "./Auth/Signin";
import ResetPassword from "./Auth/ResetPassword";
import Announcements from "./Corporate_Processes/Announcements";



function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route excet path="/" element={<HomePage />} />
        </Routes>

        <Routes>
          <Route  path="/publicannouncement" element={<PublicAnnouncement />} />
        </Routes>

        <Routes>
          <Route  path="/about" element={<AboutUs   />} />
        </Routes>

        <Routes>
          <Route  path="/signup" element={<Signup   />} />
        </Routes>

        <Routes>
          <Route  path="/signin" element={<Signin   />} />
        </Routes>

        <Routes>
          <Route  path="/resetpassword" element={<ResetPassword   />} />
        </Routes>
        
        <Routes>
          <Route  path="/announcements" element={<Announcements   />} />
        </Routes>
        
        
        <Footer/>

      </Router>
    </>
  );
}

export default App;
