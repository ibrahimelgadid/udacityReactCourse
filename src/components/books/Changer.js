import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { update } from "../../BooksAPI";

const Changer = ({ book, slectedShelf }) => {
  const [shelfState, setshelfState] = useState("");

  const changeShelfState = (e) => {
    setshelfState(e.target.value);
  };

  useEffect(() => {
    (async () => {
      await update(book, shelfState);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shelfState]);

  return (
    <div className="book-shelf-changer">
      <select
        onChange={changeShelfState}
        value={slectedShelf ? slectedShelf : "none"}
      >
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default Changer;
