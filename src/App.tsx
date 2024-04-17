import "./App.css";
import SearchBar from "./components/SearchBar";
import WeatherForecast from "./components/WeatherForecast";

function App() {
  return (
    <>
      <section className="h-[600px] w-[400px] border-4 border-blue-50 flex flex-col items-center">
        <SearchBar />
        <WeatherForecast />
      </section>
    </>
  );
}

export default App;
