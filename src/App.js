// function App() {
//   return (
//     <div>
//       <h1>Hi, I'm John Doe</h1>
//       <img src="john_doe_image.jpg" alt="John Doe" />
//       <h2>About Me</h2>
//       <p>I'm a software engineer with a passion for React and TDD.</p>
//       <a href="https://github.com/johndoe">GitHub</a>
//       <a href="https://linkedin.com/in/johndoe">LinkedIn</a>
//     </div>
//   );
// }

// export default App;

import React from "react";

function App() {
  return (
    <div>
      <h1>Hi, I'm John Doe</h1>
      <img
        src="https://via.placeholder.com/150"
        alt="portfolio photo"
      />
      <h2>About Me</h2>
      <p>
        I am a web developer with a passion for creating clean and accessible
        web applications.
      </p>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </div>
  );
}

export default App;

