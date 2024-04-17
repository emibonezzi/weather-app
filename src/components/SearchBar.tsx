import useGeo from "@/hooks/useGeo";
import useQueryStore from "@/state-management/query/store";
import { Input } from "./ui/input";
import SearchResult from "./SearchResult";

const SearchBar = () => {
  const { query, setQuery } = useQueryStore();
  const { data } = useGeo();

  return (
    <article className="relative w-[75%]">
      <Input
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <div className="absolute w-full grid mt-2 z-[99]">
        {data.map((location) => (
          <SearchResult name={location.name} country={location.country} />
        ))}
      </div>
    </article>
  );
};

export default SearchBar;
