import { Link } from "react-router-dom";

const LessonList = ({ lessons, courseId }) => {
  return (
    <div className="list-group">
      {lessons.map((lesson) => (
        <Link
          key={lesson.id}
          to={`/course/${courseId}/lesson/${lesson.id}`}
          className="list-group-item list-group-item-action"
        >
          {lesson.title}
        </Link>
      ))}
    </div>
  );
};

export default LessonList;
