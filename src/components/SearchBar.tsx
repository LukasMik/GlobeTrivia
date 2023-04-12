import { ChangeEvent, FormEvent, useEffect, useState } from "react";

interface Props {
  placeholder?: string;
  btnLabel?: string;
  onQueryChange: (query: string) => void;
}

const SearchBar = ({ placeholder, btnLabel, onQueryChange }: Props) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    onQueryChange(query);
  }, [query]);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="relative w-full md:w-1/2 lg:w-1/3 mx-auto mb-8">
      <form className="flex items-center justify-center" onSubmit={onSubmit}>
        <div className="relative w-full">
          <input
            type="text"
            placeholder={placeholder ?? "Search"}
            value={query}
            onChange={onChange}
            className="w-full px-6 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-gray-400"
          />
          <button
            type="submit"
            className="hidden md:block absolute inset-y-0 right-0 px-6 text-sm font-medium text-white bg-gray-400 rounded-md shadow-md hover:bg-gray-500 focus:outline-none focus:ring-0 focus:border-gray-400 m-1"
          >
            {btnLabel ?? "Search"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
