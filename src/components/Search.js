import { BiSearch, BiCaretDown, BiCheck } from "react-icons/bi";

const Search = ({}) => {
  return (
    <div className="py-2">
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-400">
          <BiSearch />
          <label htmlFor="query" className="sr-only" />
        </div>
        <input
          type="text"
          name="query"
          id="query"
          className="pl-8 rounded-md focus:ring-blue-300 focus:border-blue-300 block w-full sm:text-sm border-blue-300 text-gray-500"
          placeholder="Search"
        />
      </div>
    </div>
  );
};
export default Search;
