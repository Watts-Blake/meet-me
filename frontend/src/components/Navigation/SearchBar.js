import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

function SearchBar() {
  const dispatch = useDispatch();
  const [showResults, setShowResults] = useState(false);

  return (
    <div>
      <form action="/api/search" method="get">
        <input
          className=""
          type="search"
          name="search"
          placeholder="Find your Squad!(inDev)"
        ></input>
        <input
          className=""
          type="search"
          name="location"
          placeholder="City,State,Zip(inDev)"
        ></input>
      </form>
    </div>
  );
}

export default SearchBar;
