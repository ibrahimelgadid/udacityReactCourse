import React from "react";
import Changer from "./Changer";
import { useEffect } from "react";
import { getAll } from "../../BooksAPI";
import { useState } from "react";

const Read = () => {
  const [readBooks, setreadBooks] = useState([]);

  useEffect(() => {
    (async () => {
      let books = await getAll();
      if (books) {
        setreadBooks(books.filter((book) => book.shelf === "read"));
      }
    })();
  }, [readBooks]);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {readBooks.map((book) => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 192,
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

export default Read;
