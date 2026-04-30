import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import LessonList from "../components/LessonList";
import courses from "../data/courses";

const CourseDetailsPage = () => {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === parseInt(courseId));
  const [showLessons, setShowLessons] = useState(true);

  if (!course) {
    return (
      <div className="container mt-4">
        <h2>Course Not Found</h2>
        <Link to="/" className="btn btn-primary mt-2">Go Back</Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <Link to="/" className="text-decoration-none">← Back to Courses</Link>

      <h1 className="mt-3">{course.title}</h1>
      <p className="text-muted">Instructor: {course.instructor}</p>
      <p>{course.description}</p>

      <hr />

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="mb-0">Lessons ({course.lessons.length})</h4>
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={() => setShowLessons(!showLessons)}
        >
          {showLessons ? "Hide Lessons" : "Show Lessons"}
        </button>
      </div>

      {showLessons && (
        <LessonList lessons={course.lessons} courseId={course.id} />
      )}
    </div>
  );
};

export default CourseDetailsPage;
