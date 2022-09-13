import React from "react";
import { Link } from "react-router-dom";
import SearchResults from "./books/SearchResults";
import { useState } from "react";
import { useEffect } from "react";
import { getAll, search } from "../BooksAPI";

const Search = () => {
  const [searchedBooks, setsearchedBooks] = useState([]);
  const [searchWord, setsearchWord] = useState("");

  useEffect(() => {
    if (searchWord !== "") {
      (async () => {
        let searchRes = await search(searchWord.toLocaleLowerCase(), 50);
        console.log(searchRes);
        searchRes.error ? setsearchedBooks([]) : setsearchedBooks(searchRes);
      })();
    }
  }, [searchWord]);
  useEffect(() => {
    (async () => {
      let searchRes = await getAll();
      console.log(searchRes);
    })();
  }, []);

  return (
    <>
      <div className="search-books">
        <div className="search-books-bar">
          <Link to={"/"} className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={searchWord}
              placeholder="Search by title, author, or ISBN"
              onChange={(e) => setsearchWord(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
      <SearchResults searchedBooks={searchedBooks} />
    </>
  );
};

export default Search;
