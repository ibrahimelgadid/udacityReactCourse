import React from "react";
import { useEffect } from "react";
import { getAll } from "../../BooksAPI";
import { useState } from "react";
import Changer from "./Changer";

const CurrentReading = () => {
  const [currentReadingBooks, setcurrentReadingBooks] = useState([]);

  useEffect(() => {
    (async () => {
      let books = await getAll();
      if (books) {
        setcurrentReadingBooks(
          books.filter((book) => book.shelf === "currentlyReading")
        );
      }
    })();
  }, [currentReadingBooks]);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {currentReadingBooks.map((book) => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 188,
                      backgroundImage: `url(${book.imageLinks.thumbnail})`,
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
    </div>
  );
};

export default CurrentReading;
