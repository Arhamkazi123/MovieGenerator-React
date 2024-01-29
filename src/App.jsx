import { useState } from "react";
import "./App.css";
import Moviecard from "./Moviecard.jsx";
import Searchcontainer from "./Searchcontainer.jsx";

const URL = `http://www.omdbapi.com/?i=tt3896198&apikey=fea97f4a`;

function App() {
  const [movies, setMovies] = useState([]);
  const [sch, setsch] = useState("");

  const searchMovies = async (title) => {
    let response = await fetch(`${URL}&s=${title}`);
    let data = await response.json();
    setMovies(data.Search);
  };
  return (
    <>
      <h1>Kazi's PlayList</h1>

      <div className="search-container">
        <Searchcontainer
          sch={sch}
          setsch={setsch}
          searchMovies={searchMovies}
        />
      </div>

      <div className="display-container">
        <Moviecard movies={movies} />
      </div>
    </>
  );
}

export default App;
