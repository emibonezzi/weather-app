interface Props {
  name: string;
  country: string;
}

const SearchResult = ({ name, country }: Props) => {
  return (
    <div className="flex justify-between shadow-md py-5 px-3 my-1 border-2 rounded-md">
      <p>{name}</p>
      <p>{country}</p>
    </div>
  );
};

export default SearchResult;
