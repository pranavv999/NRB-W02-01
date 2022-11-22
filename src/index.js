import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

const app = document.getElementById("root");
const root = ReactDOM.createRoot(app);

root.render(<App />);
