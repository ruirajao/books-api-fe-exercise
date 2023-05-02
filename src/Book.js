import axios from 'axios';
import { useState, useEffect } from 'react';
import './Books.css';

function Book() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://5.22.217.225:8081/api/v1/book/?sort_by=year&order_by=desc');
      setBooks(response.data.data); // assuming the data returned by the API is an array of book objects
      console.log(response.data); // log the response data to the console
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="book-container">
      <h1 className="book-title">Books</h1>
      <div className="book-list">
        {books.map((book) => (
          <div className="book-item" key={book.id}>
            <div className="book-cover">
              <img src={book.book_cover} alt={book.title} />
            </div>
            <div className="book-info">
              <h2 className="book-info__title">{book.title}</h2>
              <p className="book-info__year">Year: {book.year}</p>
              <p className="book-info__description">{book.description}</p>
              <div className="book-info__user">
                <img className="book-info__user-avatar" src={book.user.profile_picture} alt={book.user.name} />
                <div className="book-info__user-details">
                  <p className="book-info__user-name">{book.user.name}</p>
                  <p className="book-info__user-email">{book.user.email}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Book;
