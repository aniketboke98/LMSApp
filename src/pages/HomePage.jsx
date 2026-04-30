import { useState } from "react";
import CourseList from "../components/CourseList";
import courses from "../data/courses";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h1 className="mb-3">All Courses</h1>

      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredCourses.length > 0 ? (
        <CourseList courses={filteredCourses} />
      ) : (
        <p className="text-muted">No courses found.</p>
      )}
    </div>
  );
};

export default HomePage;
