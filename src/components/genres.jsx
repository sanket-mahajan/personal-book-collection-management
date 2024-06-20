import React, { useContext, useState } from "react";
import { BookContext } from "../context/bookcontext";
import "./Style/genre.css";

export const Genres = () => {
  const { books } = useContext(BookContext);
  const [selectedGenre, setSelectedGenre] = useState();

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const filteredBooks = books.filter((book) => book.genre === selectedGenre);

  return (
    <div className="genre">
      <h1>Genres</h1>
      <select onChange={handleGenreChange} value={selectedGenre}>
        <option value="">Select Genre</option>
        {[...new Set(books.map((book) => book.genre))].map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

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
