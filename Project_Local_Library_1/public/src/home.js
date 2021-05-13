function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  const count = accounts.reduce((counter, acct) => {
    if (acct) counter += 1
    return counter;
  }, 0);
  return count
}

function getBooksBorrowedCount(books) {
  // const borrowedBooks = books.filter((book) => book.borrows.returned === false)
  // return borrowedBooks.length
  let acc = 0;
    for (let bookCounter in books) {
      if (books[bookCounter].borrows[0].returned === false){
        acc++;
      }
    }
    return acc;
}

function getMostCommonGenres(books) {
  booksByGenre = []

  for (let bookSorter of books){
    let genre = booksByGenre.find((genreCheck) => genreCheck.name === bookSorter.genre)

    if (genre){
      genre.count++
    } else{
      booksByGenre.push({name: bookSorter.genre, count:1 })
    }
  }
   booksByGenre.sort((genA, genB) => (genB.count - genA.count))
  console.log(booksByGenre);
  return booksByGenre.slice(0, 5);
}

function getMostPopularBooks(books) {
  const booksByPopularity = []
  for(let book in books){
    let pop = books[book].borrows.length;
    booksByPopularity.push({name : books[book].title, count : pop});
  }
  let popSorted = booksByPopularity.sort((bookA, bookB) => bookB.count - bookA.count);
  return popSorted.slice(0,5)
}

function findAuthorById(authors, id) {
  const foundAuth = authors.find((acct) => acct.id === id)
  return foundAuth
}

function getMostPopularAuthors(books, authors) {
  const mappedBooks = books.map((book) => {
    const {name : {first, last}} = findAuthorById(authors, book.authorId)
    return { name: `${first} ${last}`, count: book.borrows.length};
  });
  return mappedBooks.sort((book1, book2) => book2.count - book1.count).slice(0,5);
}  
  // let emptyArr = []
  // let count = 0
  // const matchingBooks = books.map((book) => book.authorId)
  // console.log(matchingBooks)
  // const matchingAuthors = authors.map((author) => authors.id)
  // console.log(matchingAuthors)
//   for (let book in books){
//     if(books[book].id === authors.id){
//       count++
//     }
//     console.log(count)
//   }
// const foundAuthors = authors.filter((auth) => auth.authorId === books.id)
// console.log(foundAuthors)

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
