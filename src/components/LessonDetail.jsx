const LessonDetail = ({ lesson }) => {
  if (!lesson) {
    return <p className="text-muted">Select a lesson to view its content.</p>;
  }

  return (
    <div>
      <h3>{lesson.title}</h3>
      <p>{lesson.content}</p>
    </div>
  );
};

export default LessonDetail;
