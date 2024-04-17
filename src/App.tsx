import "./App.css";
import WeatherForecast from "./components/WeatherForecast";

function App() {
  return (
    <>
      <section id="forecast" className="flex flex-col">
        <WeatherForecast />
      </section>
    </>
  );
}

export default App;
