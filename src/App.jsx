import "./App.css";
import { useState, useEffect } from "react";

const Card = ({ title }) => {
  const [count, setCount] = useState(0)
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`)
  })

  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>{title}<br/> {count}</h2>

      <button onClick={() => setHasLiked(!hasLiked)}>{hasLiked ? "Liked" : "like"}</button>
    </div>
  );
};

const App = () => {
  return (
    <div className="card-container">
      <Card title={"Mark zukerburg"} />
      <Card title={"Jesse pinkman"} />
      <Card title={"Walter White"} />
    </div>
  );
};

export default App;
