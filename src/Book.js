import React from "react";

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

export default Book;
