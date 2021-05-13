function findAuthorById(authors, id) {
  const foundAuth = authors.find((acct) => acct.id === id)
  return foundAuth
}

function findBookById(books, id) {
  const foundBook = books.find((book) => book.id === id)
  return foundBook
}

function partitionBooksByBorrowedStatus(books) {
  let borrowed = []
  let returned = []
  let finalArray = [borrowed, returned]
  for(let book in books){
    if (books[book].borrows[0].returned === false) {
      borrowed.push(books[book]);
    } else {
      returned.push(books[book]);
    }
  }
    return finalArray
}
  

function getBorrowersForBook(book, accounts) {
  const {borrows} = book
  let result = []
  for (let selected in borrows){
    for(let account in accounts){
      if (borrows[selected].id === accounts[account].id){
        result.push({...borrows[selected],...accounts[account]})
      }
    }
  }
  return result.slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
