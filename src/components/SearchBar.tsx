import useGeo from "@/hooks/useGeo";
import useQueryStore from "@/state-management/query/store";
import { Input } from "./ui/input";
import SearchResult from "./SearchResult";

const SearchBar = () => {
  const { query, setQuery } = useQueryStore();
  const { data } = useGeo();

  return (
    <>
      <Input
        className="w-[200px]"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <div className="grid mt-2">
        {data.map((location) => (
          <SearchResult name={location.name} country={location.country} />
        ))}
      </div>
    </>
  );
};

export default SearchBar;
