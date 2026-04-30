import { useParams, Link } from "react-router-dom";
import LessonDetail from "../components/LessonDetail";
import courses from "../data/courses";

const LessonViewPage = () => {
  const { courseId, lessonId } = useParams();
  const course = courses.find((c) => c.id === parseInt(courseId));

  if (!course) {
    return (
      <div className="container mt-4">
        <h2>Course Not Found</h2>
        <Link to="/" className="btn btn-primary mt-2">Go Home</Link>
      </div>
    );
  }

  const lesson = course.lessons.find((l) => l.id === parseInt(lessonId));

  if (!lesson) {
    return (
      <div className="container mt-4">
        <h2>Lesson Not Found</h2>
        <Link to={`/course/${courseId}`} className="btn btn-primary mt-2">
          Back to Course
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <Link to={`/course/${courseId}`} className="text-decoration-none">
        ← Back to {course.title}
      </Link>

      <div className="mt-3">
        <LessonDetail lesson={lesson} />
      </div>

      <div className="d-flex justify-content-between mt-4">
        {lesson.id > 1 ? (
          <Link
            to={`/course/${courseId}/lesson/${lesson.id - 1}`}
            className="btn btn-outline-primary"
          >
            ← Previous Lesson
          </Link>
        ) : (
          <div></div>
        )}
        {lesson.id < course.lessons.length ? (
          <Link
            to={`/course/${courseId}/lesson/${lesson.id + 1}`}
            className="btn btn-outline-primary"
          >
            Next Lesson →
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default LessonViewPage;
