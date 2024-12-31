import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook, removeBook } from "./actions";

export default function LibraryManagementForm() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    isbn: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setBookData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleAddBook = () => {
    if (bookData.title && bookData.author && bookData.isbn) {
      dispatch(addBook(bookData));

      setBookData({
        title: "",
        author: "",
        isbn: "",
      });
    }
  };

  return (
    <main>
      <h1>Library Management</h1>
      <input
        type="text"
        placeholder="Title"
        value={bookData.title}
        id="title"
        onChange={handleInputChange}
      />{" "}
      <br />
      <input
        type="text"
        placeholder="Author"
        id="author"
        value={bookData.author}
        onChange={handleInputChange}
      />
      <br />
      <input
        type="text"
        placeholder="ISBN"
        id="isbn"
        value={bookData.isbn}
        onChange={handleInputChange}
      />
      <br />
      <button onClick={handleAddBook}>Add Book</button>
      <h2>Library Summary</h2>
      <h3>Total Books: {books.length}</h3>
      <ul>
        {books.map((book) => (
          <li key={book.isbn}>
            {book.title} by {book.author}: {book.isbn}
            <button onClick={() => dispatch(removeBook(book.isbn))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
