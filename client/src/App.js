import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/home-page/homePage";
import StudentPage from "./pages/student-detail-page/studentPage";
import CoursePage from "./pages/courses-page/coursesPage";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route exact path="/course-page" element={<CoursePage />} />
        </Routes>
        {/* <Routes>
          <Route exact path="/student-page" element={<StudentPage />} />
        </Routes> */}
        <Routes>
          <Route exact path="/student-page/:id" element={<StudentPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
