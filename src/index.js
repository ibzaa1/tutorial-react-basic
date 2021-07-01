// IMPORT
import React from "react";
import ReactDom from "react-dom";
import { books } from "./books";
import "./index.css";
import EachBook from "./Book";

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <EachBook key={book.id} {...book}></EachBook>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
