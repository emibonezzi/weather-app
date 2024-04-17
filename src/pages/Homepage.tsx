import useGeo from "@/hooks/useGeo";
import useQueryStore from "@/state-management/query/store";
import SearchResult from "../components/SearchResult";
import { Input } from "../components/ui/input";
import { Link } from "react-router-dom";

const Homepage = () => {
  const { setQuery } = useQueryStore();
  const { data } = useGeo();

  return (
    <section className="relative w-[65%]">
      <h1 className="text-slate-400">What's the weather in...</h1>
      <Input
        placeholder="Type a city and press enter"
        className="h-[80px] text-3xl text-slate-500"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <section
        id="results"
        className="absolute w-full grid grid-cols-3 gap-3 mt-5 z-[99]"
      >
        {data?.map((location) => (
          <Link onClick={() => {}} to="/forecast">
            <SearchResult
              name={location.name}
              country={location.country}
              state={location.state}
            />
          </Link>
        ))}
      </section>
    </section>
  );
};

export default Homepage;
