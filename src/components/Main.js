import React, { useState } from "react";
import { Link } from "react-router-dom";
import CurrentReading from "./books/CurrentReading";
import Read from "./books/Read";
import WantToRead from "./books/WantToRead";
import Header from "./Header";

const Main = () => {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      <div className="list-books">
        <Header />
        <div className="list-books-content">
          <div>
            <CurrentReading />
            <WantToRead />
            <Read />
          </div>
        </div>

        <div className="open-search">
          <Link
            to={"/search"}
            onClick={() => setShowSearchpage(!showSearchPage)}
          >
            Add a book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
