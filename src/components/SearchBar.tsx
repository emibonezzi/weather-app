import { Input } from "@/components/ui/input";

const SearchBar = () => {
  return (
    <>
      <Input
        onChange={(e) => {
          console.log(e.target.value);
        }}
        className="w-[200px]"
      />
    </>
  );
};

export default SearchBar;
