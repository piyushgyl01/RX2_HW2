export const addBook = (book) => {
  return {
    type: "ADD_BOOK",
    payload: book,
  };
};

export const removeBook = (isbn) => {
  return {
    type: "REMOVE_BOOK",
    payload: { isbn },
  };
};
