import useGeo from "@/hooks/useGeo";
import useCurrentLocationStore from "@/state-management/location/store";
import useQueryStore from "@/state-management/query/store";
import { Link } from "react-router-dom";
import SearchResult from "../components/SearchResult";
import { Input } from "../components/ui/input";

const Homepage = () => {
  const { setQuery } = useQueryStore();
  const { data } = useGeo();
  const { setCurrentLocation } = useCurrentLocationStore();

  return (
    <section className="mt-[200px] flex flex-col justify-center items-center">
      <h1 className="text-slate-400">What's the weather in...</h1>
      <div className="w-[65%]">
        <Input
          placeholder="Type a city..."
          className="h-[80px]  text-3xl text-slate-500"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <section id="results" className="grid grid-cols-3 gap-3 mt-5 z-[99]">
          {data?.map((location) => (
            <Link
              onClick={() =>
                setCurrentLocation({
                  name: location.name,
                  lat: location.lat,
                  lon: location.lon,
                  country: location.country,
                  state: location.state,
                })
              }
              to="/forecast"
            >
              <SearchResult
                name={location.name}
                country={location.country}
                state={location.state}
              />
            </Link>
          ))}
        </section>
      </div>
    </section>
  );
};

export default Homepage;
