import React, { useContext, useState } from "react";
import { BookContext } from "../context/bookcontext";
import "./Style/search.css";

export const Search = () => {
  const { books } = useContext(BookContext);
  const [query, setQuery] = useState("");

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search">
      <h1>Search Books</h1>
      <input
        type="text"
        placeholder="search by title or author"
        value={query}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author} ({book.genre}) -
            {book.status ? "Read" : "Unread"}
          </li>
        ))}
      </ul>
    </div>
  );
};
