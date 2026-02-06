import React from "react";

export const Todos = ({ props }) => {
  const { todo } = props;
  console.log(todo);
  return (
    <>
      <h1>List of Todos</h1>
    </>
  );
};
