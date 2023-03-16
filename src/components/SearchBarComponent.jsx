import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchResultsList from "./SearchResultsList";

const API_ID = "20ce5b59";
const API_KEY = "3860d1e02a44fd118e09f500213dd9bf";

function SearchBarComponent() {
  const [query, setQuery] = useState("");
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    async function fetchData() {
    if (query !== "") {
      try {
        const response = await axios.get(
          `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=9&lang=fr`
        );
        setDatas(response.data.hits);
      } catch (error) {
        console.log(error);
      }
    } else{
      setDatas([]);
    }
  }


    fetchData();
  }, [query]);

  const handleInputChange = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  };

  return (
    <div>
    <div className="mt-28 space-x-1 flex justify-center">
      <form className="h-12">
        <input
          type="text"
          className="block w-80 px-6 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
        />
      </form>
    </div>
      <SearchResultsList results={datas} />
      </div>
  );
}

export default SearchBarComponent;
