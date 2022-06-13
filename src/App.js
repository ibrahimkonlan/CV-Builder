import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./components/HomePage/HomePage";
import PersonalDetails from "./components/PersonalDetails/PersonalDetails";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Education from "./components/Education/Education";
import Interest from "./components/Interests/Interest";
import Skills from "./components/Skills/Skills";
import CVPage from "./components/CVPage/CVPage";


function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/personal" element={<PersonalDetails />} />
        <Route path="/work" element={<WorkExperience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/interest" element={<Interest />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/cvpage" element={<CVPage />} />
      </Routes>
    </Router>
  );
}

export default App;
