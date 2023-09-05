import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PublicAnnouncement from "./component/Public_announcement";


function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<PublicAnnouncement />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
