import "./App.css";

const Card = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
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
