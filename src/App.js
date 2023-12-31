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
import DRTs from "./Orders/DRTs";
import HIGHCOURTs from "./Orders/HIGHCOURTs";
import SUPREMECOURT from "./Orders/SUPREMECOURT";
import NCLAT from "./Orders/NCLAT";
import NCLT from "./Orders/NCLT";
import IBBI from "./Orders/IBBI";
import IPARVO from "./Orders/IPARVO";
import OTHERCOURTS from "./Orders/OTHERCOURTS";
import Viewdeatils from "./HomePage/Viewdeatils";
import Viewclaims from "./Corporate_Processes/Viewclaims";
import FinancialCreditor from "./services/Financial_Creditor";
import OperationalCreditor from "./services/Operational_Creditor";
import ResolutionApplicant from "./services/Resolution_Applicant";
import ResolutionProfessional from "./services/Resolution_Professional";
import Liquidator from "./services/Liquidator";
import Blogs from "./blog/Blogs";
import PostDetails from "./blog/PostDetails";
import EditBlog from "./blog/EditBlog";
import Highlights from "./Highlights/Highlights";
import EditHighlights from "./Highlights/EditHighlights";
import HighlightsDetails from "./Highlights/HighlightsDetails";
import Testimonial from "./Testimonials/Testimonial";
import Edittestimonials from "./Testimonials/Edittestimonials";
import TestimonialsDetails from "./Testimonials/TestimonialsDetails";

const myAllroute = [
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/contact-us", element: <ContactUs /> },
  { path: "/signup", element: <Signup /> },
  { path: "/signin", element: <Signin /> },
  { path: "/resetpassword", element: <ResetPassword /> },
  { path: "/announcement", element: <Announcements /> },
  { path: "/Auction", element: <AuctionNotices /> },
  { path: "/Claims", element: <Claims /> },
  { path: "/Invitation", element: <InvitationofResolutionPlan /> },
  { path: "/Orders", element: <Orders /> },
  { path: "/Summary", element: <SummaryofOutcome /> },
  { path: "/drts", element: <DRTs /> },
  { path: "/highcourts", element: <HIGHCOURTs /> },
  { path: "/supremecourt", element: <SUPREMECOURT /> },
  { path: "/nclat", element: <NCLAT /> },
  { path: "/nclt", element: <NCLT /> },
  { path: "/ibbi", element: <IBBI /> },
  { path: "/iparvo", element: <IPARVO /> },
  { path: "/othercourts", element: <OTHERCOURTS /> },
  { path: "/viewdeatils", element: <Viewdeatils /> },
  { path: "/Viewclaims/:id", element: <Viewclaims /> },
  { path: "/financial-creditor", element: <FinancialCreditor /> },
  { path: "/operational-creditor", element: <OperationalCreditor /> },
  { path: "/resolution-applicant", element: <ResolutionApplicant /> },
  { path: "/resolution-professional", element: <ResolutionProfessional /> },
  { path: "/liquidator", element: <Liquidator /> },
  { path: "/blogs", element: <Blogs /> },
  { path: "/postdetails/:id/:dynamicurl", element: <PostDetails /> },
  { path: "/editBlog/:id", element: <EditBlog /> },
  { path: "/highlights", element: <Highlights /> },
  { path: "/editHighlights/:id", element: <EditHighlights /> },
  { path: "/highlightsDetails/:id/:dynamicurl", element: <HighlightsDetails /> },
  { path: "/testimonial", element: <Testimonial /> },
  { path: "/edittestimonials/:id", element: <Edittestimonials /> },
  { path: "/testimonialsdetails/:id/:dynamicurl", element: <TestimonialsDetails /> },
]

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {myAllroute.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
