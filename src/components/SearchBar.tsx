import useGeo from "@/hooks/useGeo";
import useQueryStore from "@/state-management/query/store";
import { Input } from "./ui/input";
import SearchResult from "./SearchResult";

const SearchBar = () => {
  const { query, setQuery } = useQueryStore();
  const { data } = useGeo();

  return (
    <section className="relative w-[65%] mt-[150px]">
      <h1 className="text-slate-400">What's the weather in...</h1>
      <Input
        placeholder="Type a city and press enter"
        className="h-[80px] text-3xl text-slate-500"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <div className="absolute w-full grid grid-cols-3 gap-3 mt-5 z-[99]">
        {data?.map((location) => (
          <SearchResult
            name={location.name}
            country={location.country}
            state={location.state}
          />
        ))}
      </div>
    </section>
  );
};

export default SearchBar;
