import React from "react";

export default interface SearchEngineProps {
  query: string;
  setQuery: (query: string) => void;
  search: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
