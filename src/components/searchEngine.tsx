import React from "react";
import SearchEngineProps from "../interface/searchEngineProps.tsx";

const SearchEngine = ({ query, setQuery, search }: SearchEngineProps) => {
  const onHandleKeyPress = (event) => {
    if (event.key === "Enter") {
      search(event);
    }
  };

  return (
    <div className="mt-5 mx-16">
      <div class="relative w-full">
        <input
          name="query"
          value={query}
          type="text"
          placeholder="Search for a city"
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={onHandleKeyPress}
          className="rounded-md bg-[#9CE2FA] text-white border-[#ABD0DB] 
                   pl-10 pr-3 outline-none w-full h-10 focus:border-white"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchEngine;
