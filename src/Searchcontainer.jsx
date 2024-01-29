import React from "react";
import { FaSearch } from "react-icons/fa";

const Searchcontainer = ({ sch, setsch, searchMovies }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter movie name"
        value={sch}
        onChange={(e) => setsch(e.target.value)}
      />
      <FaSearch className="accha" onClick={() => searchMovies(sch)} />
    </>
  );
};

export default Searchcontainer;
