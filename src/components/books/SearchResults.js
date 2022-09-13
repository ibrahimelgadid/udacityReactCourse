import React from "react";
import Changer from "./Changer";

const SearchResults = ({ searchedBooks }) => {
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {searchedBooks.map((book) => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 192,
                    backgroundImage: `url(${book.imageLinks?.thumbnail})`,
                  }}
                ></div>
                <Changer book={book} slectedShelf={book.shelf} />
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SearchResults;
