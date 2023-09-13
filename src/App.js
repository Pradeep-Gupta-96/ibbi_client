import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PublicAnnouncement from "./component/Public_announcement";
import AboutUs from "./component/AboutUs";
import HomePage from "./HomePage/HomePage";
import Footer from "./footer/Footer";
import Signup from "./Auth/Signup";
import Signin from "./Auth/Signin";
import ResetPassword from "./Auth/ResetPassword";
import ContactUs from "./component/ContactUs";



function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route excet path="/" element={<HomePage />} />
        </Routes>

        <Routes>
          <Route  path="/announcement" element={<PublicAnnouncement />} />
        </Routes>

        <Routes>
          <Route  path="/about" element={<AboutUs   />} />
        </Routes>

        <Routes>
          <Route  path="/contact-us" element={<ContactUs   />} />
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
        
        
        <Footer/>

      </Router>
    </>
  );
}

export default App;
