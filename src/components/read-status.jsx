import React, { useContext, useState } from "react";
import { BookContext } from "../context/bookcontext";
import "./Style/readstatus.css";

export const ReadStatus = () => {
  const { books } = useContext(BookContext);
  const [statusFilter, setStatusFillter] = useState("all");

  const handleStatusChange = (e) => {
    setStatusFillter(e.target.value);
  };

  const filteredBooks =
    statusFilter === "all"
      ? books
      : books.filter((book) => book.status === (statusFilter === "read"));

  return (
    <div className="readstatus">
      <h1>Read Status</h1>
      <select onChange={handleStatusChange} value={statusFilter}>
        <option value="all">All</option>
        <option value="read">Read</option>
        <option value="unread">Unread</option>
      </select>

      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author} ({book.genre}) -{" "}
            {book.status ? "Read" : "Unread"}
          </li>
        ))}
      </ul>
    </div>
  );
};
