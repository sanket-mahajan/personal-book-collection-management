import React, { useContext, useRef, useState } from "react";
import { BookContext } from "../context/bookcontext";
import "./Style/allbooks.css";

const AllBooks = () => {
  const { books, addBook, deleteBook, updateBook } = useContext(BookContext);
  const [editingBook, setEditingBook] = useState(null);
  const titleRef = useRef();
  const authorRef = useRef();
  const genreRef = useRef();
  const statusRef = useRef();

  const handleAddBook = (e) => {
    e.preventDefault();
    if (editingBook) {
      updateBook({
        id: editingBook.id,
        title: titleRef.current.value,
        author: authorRef.current.value,
        genre: genreRef.current.value,
        status: statusRef.current.value === "read",
      });
    } else {
      const newBook = {
        id: Date.now(),
        title: titleRef.current.value,
        author: authorRef.current.value,
        genre: genreRef.current.value,
        status: statusRef.current.value === "read",
      };
      addBook(newBook);
    }

    setEditingBook(null);
    titleRef.current.value = "";
    authorRef.current.value = "";
    genreRef.current.value = "";
    statusRef.current.value = "unread";
  };

  const handleEditing = (book) => {
    setEditingBook(book);
    titleRef.current.value = book.title;
    authorRef.current.value = book.author;
    genreRef.current.value = book.genre;
    statusRef.current.value = book.status ? "read" : "unread";
  };

  return (
    <div className="allbooks">
      <h1>All Books</h1>
      <form onSubmit={handleAddBook}>
        <input ref={titleRef} type="text" placeholder="Title" required />
        <input ref={authorRef} type="text" placeholder="Author" required />
        <input ref={genreRef} type="text" placeholder="Genre" required />
        <select ref={statusRef} required>
          <option value="unread">Unread</option>
          <option value="read">Read</option>
        </select>
        <button type="submit">
          {editingBook ? "Update Book" : "Add Book"}
        </button>
      </form>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <span>
              {book.title} by {book.author} ({book.genre}) -{" "}
              {book.status ? "Read" : "Unread"}
            </span>
            <div className="button-group">
              <button onClick={() => handleEditing(book)}>Edit Book</button>
              <button onClick={() => deleteBook(book.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllBooks;
