import useGeo from "@/hooks/useGeo";
import useCurrentLocationStore from "@/state-management/location/store";
import useQueryStore from "@/state-management/query/store";
import { Link } from "react-router-dom";
import SearchResult from "../components/SearchResult";
import { Input } from "../components/ui/input";
import { LuSun } from "react-icons/lu";

const Homepage = () => {
  const { setQuery } = useQueryStore();
  const { data } = useGeo();
  const { setCurrentLocation } = useCurrentLocationStore();

  return (
    <section className="mt-[200px] flex flex-col justify-center items-center">
      <div className="text-[300px] lg:text-[500px] z-[-99] text-yellow-200 absolute top-[-100px] lg:right-[-100px]">
        <LuSun />
      </div>
      <h1 className="text-slate-400 mb-[20px] text-3xl lg:text-7xl">
        What's the weather in...
      </h1>
      <div className="w-[300px] lg:w-[65%]">
        <Input
          placeholder="Type a city..."
          className="lg:h-[80px] text-xl lg:text-3xl text-slate-500"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <section
          id="results"
          className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-5"
        >
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
