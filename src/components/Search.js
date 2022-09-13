import React from "react";
import { Link } from "react-router-dom";
import SearchResults from "./books/SearchResults";
import { useState } from "react";
import { useEffect } from "react";
import { getAll, search } from "../BooksAPI";

const Search = () => {
  const [searchedBooks, setsearchedBooks] = useState([]);
  const [searchWord, setsearchWord] = useState("");

  const handleSearchWord = async () => {
    if (searchWord.length > 0) {
      let searchRes = await search(searchWord.trim());
      let shelfedBooks = await getAll();

      if (!searchRes.error) {
        searchRes.forEach((sr) => {
          let sb = shelfedBooks.filter((sb) => sb.id === sr.id);
          sr.shelf = sb.length ? sb[0].shelf : "none";
          setsearchedBooks(searchRes);
        });
      } else {
        setsearchedBooks([]);
      }
    } else if (searchWord.length === 0) {
      setsearchedBooks([]);
    }
  };

  useEffect(() => {
    handleSearchWord();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchWord]);

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
              onChange={(e) => {
                setsearchWord(e.target.value);
              }}
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
