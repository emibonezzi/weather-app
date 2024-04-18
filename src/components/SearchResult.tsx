import { stat } from "fs";
import ReactCountryFlag from "react-country-flag";

interface Props {
  name: string;
  country: string;
  state: string;
}

const SearchResult = ({ name, country, state }: Props) => {
  return (
    <div className="flex text-base lg:text-xl justify-between shadow-md py-5 px-3 border-2 border-slate-400 rounded-md bg-white text-slate-500 text-2xl">
      <p>
        {name}, {state}
      </p>
      <ReactCountryFlag countryCode={country} />
    </div>
  );
};

export default SearchResult;
