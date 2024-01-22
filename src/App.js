import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New york" />
        <footer>
          This project is created by{" "}
          <a href="https://www.linkedin.com/in/nino-antadze/" target="_target">
            NiniA
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/niniantadze/react-weatherapp-by-ninia"
            target="_target"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
