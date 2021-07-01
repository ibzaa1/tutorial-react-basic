import React from "react";
import ReactDom from "react-dom";

// Import CSS
import "./index.css";

const books = [
  {
    id: 1,
    img: "https://images-eu.ssl-images-amazon.com/images/I/81m%2BCzh8CbS._AC_UL200_SR200,200_.jpg",
    title: "Mega Monster",
    author: "Ibby Tee",
  },
  {
    id: 2,
    img: "https://images-eu.ssl-images-amazon.com/images/I/91W-1RjjvlS._AC_UL200_SR200,200_.jpg",
    title: "A Christmas Pig",
    author: "Ibrahim Thanbir",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/51sqLjHXEIL._SY412_BO1,204,203,200_.jpg",
    title: "Before Heart Breaks",
    author: "Ibrahim Thanbir",
  },
];

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  const clickHandler = () => {
    alert(title);
  };
  return (
    <article
      className='book'
      // onMouseOver={() => {
      //   console.log(title);
      // }}
    >
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button
        type='button'
        onClick={() => {
          clickHandler();
        }}
      >
        EXAMPLE
      </button>
    </article>
  );
};
ReactDom.render(<BookList />, document.getElementById("root"));
