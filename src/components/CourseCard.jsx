import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{course.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Instructor: {course.instructor}
          </h6>
          <p className="card-text">{course.description}</p>
          <Link to={`/course/${course.id}`} className="btn btn-primary">
            View Course
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
