const courses = [
  {
    id: 1,
    title: "React Basics",
    instructor: "John Doe",
    description: "Learn the fundamentals of React including JSX, components, props, and state.",
    lessons: [
      { id: 1, title: "Introduction to React", content: "React is a JavaScript library for building user interfaces. It was developed by Facebook. React allows developers to create large web applications that can update and render efficiently." },
      { id: 2, title: "Components", content: "Components are the building blocks of any React application. A component is a JavaScript function that returns JSX. Components can accept inputs called props and manage internal data called state." },
      { id: 3, title: "Props and State", content: "Props are read-only inputs passed from a parent component to a child. State is data managed within a component using the useState hook. When state changes, React re-renders the component." },
    ],
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    instructor: "Jane Smith",
    description: "Deep dive into closures, promises, async/await, and ES6+ features.",
    lessons: [
      { id: 1, title: "Closures & Scope", content: "A closure is a function that retains access to its outer function variables even after the outer function has returned. Understanding lexical scope is essential to mastering closures." },
      { id: 2, title: "Promises & Async/Await", content: "Promises represent a value that may be available now or in the future. The async/await syntax provides a cleaner way to work with promises using try/catch for error handling." },
    ],
  },
  {
    id: 3,
    title: "CSS Masterclass",
    instructor: "Emily Chen",
    description: "Master modern CSS including Flexbox, Grid, animations, and responsive design.",
    lessons: [
      { id: 1, title: "Flexbox Layout", content: "Flexbox is a one-dimensional layout model that distributes space along a single axis. Key properties include display flex, justify-content, align-items, and flex-direction." },
      { id: 2, title: "CSS Grid", content: "CSS Grid is a two-dimensional layout system for creating complex layouts with rows and columns. Key properties include grid-template-columns, grid-template-rows, and gap." },
    ],
  },
];

export default courses;
