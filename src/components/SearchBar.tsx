import { Input } from "@/components/ui/input";
import useGeo from "@/hooks/useGeo";
import useQueryStore from "@/state-management/query/store";

const SearchBar = () => {
  const { query, setQuery } = useQueryStore();
  /* const { refetch } = useGeo(query); */

  return (
    <>
      <Input
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        className="w-[200px]"
      />
    </>
  );
};

export default SearchBar;
