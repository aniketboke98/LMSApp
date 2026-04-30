import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import LessonViewPage from "./pages/LessonViewPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course/:courseId" element={<CourseDetailsPage />} />
        <Route
          path="/course/:courseId/lesson/:lessonId"
          element={<LessonViewPage />}
        />
      </Routes>
    </>
  );
}

export default App;
