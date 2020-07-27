import React from "react";
import ListItem from "./ListItem";
import { mapProps } from "recompose";

const BookItem = ({book}) => {
  return ({
    title: book.name,
    body: `Author : ${book.author}`
  });
};

export default mapProps(BookItem)(ListItem);
