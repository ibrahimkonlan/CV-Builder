import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./components/HomePage/HomePage";
import PersonalDetails from "./components/PersonalDetails/PersonalDetails";
import WorkExperience from "./components/WorkExperience/WorkExperience";
function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/personal" element={<PersonalDetails />} />
        <Route path="/work" element={<WorkExperience />} />
      </Routes>
    </Router>
  );
}

export default App;
