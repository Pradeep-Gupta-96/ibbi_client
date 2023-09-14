import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from "./component/AboutUs";
import HomePage from "./HomePage/HomePage";
import Footer from "./footer/Footer";
import Signup from "./Auth/Signup";
import Signin from "./Auth/Signin";
import ResetPassword from "./Auth/ResetPassword";
import ContactUs from "./component/ContactUs";
import Announcements from "./Corporate_Processes/Announcements";
import AuctionNotices from "./Corporate_Processes/AuctionNotices";
import Claims from "./Corporate_Processes/Claims";
import InvitationofResolutionPlan from "./Corporate_Processes/InvitationofResolutionPlan";
import Orders from "./Corporate_Processes/Orders";
import SummaryofOutcome from "./Corporate_Processes/SummaryofOutcome";
import DRAT from "./Orders/DRAT";
import DRTs from "./Orders/DRTs";
import HIGHCOURTs from "./Orders/HIGHCOURTs";



function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route excet path="/" element={<HomePage />} />
        </Routes>

        <Routes>
          <Route path="/about" element={<AboutUs />} />
        </Routes>

        <Routes>
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>

        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>

        <Routes>
          <Route path="/signin" element={<Signin />} />
        </Routes>

        <Routes>
          <Route path="/resetpassword" element={<ResetPassword />} />
        </Routes>

        <Routes>
          <Route path="/announcement" element={<Announcements />} />
        </Routes>

        <Routes>
          <Route path="/Auction" element={<AuctionNotices />} />
        </Routes>

        <Routes>
          <Route path="/Claims" element={<Claims />} />
        </Routes>

        <Routes>
          <Route path="/Invitation" element={<InvitationofResolutionPlan />} />
        </Routes>

        <Routes>
          <Route path="/Orders" element={<Orders />} />
        </Routes>

        <Routes>
          <Route path="/Summary" element={<SummaryofOutcome />} />
        </Routes>

        <Routes>
          <Route path="/drat" element={<DRAT />} />
        </Routes>

        <Routes>
          <Route path="/drts" element={<DRTs />} />
        </Routes>

        <Routes>
          <Route path="/highcourts" element={<HIGHCOURTs />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
