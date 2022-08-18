import NewRobot from "./components/NewRobot/NewRobot";
import Register from "./components/Register/Register";
import RobotsList from "./components/RobotsList/RobotsList";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <header className="main-header">
        <h1>Robots App</h1>
      </header>
      <main className="main-content">
        <NewRobot />
        <RobotsList />
        <Register />
      </main>
    </div>
  );
};

export default App;
