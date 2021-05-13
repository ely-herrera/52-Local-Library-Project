function findAccountById(accounts, id) {
  const accLocater = accounts.find((acct) => acct.id === id)
  return accLocater
}

// takes in accounts object and returns an array of objects ( name as the key and an object of the first and last name as the value )
function sortAccountsByLastName(accounts) {
    const nameFinder = accounts.map((acct) => acct)
    nameFinder.filter((acc) => acc)
   console.log(nameFinder) 
   const nameSorter = nameFinder.sort((names1, names2) => (names1.name.last > names2.name.last) ? 1 : -1)
   return nameSorter
  }
  // const nameSort = nameFinder.sort((lastA, lastB) => (lastA.last.toLowerCase() > lastB.last.toLowerCase())? 1 : -1)
  // console.log(nameSort)
  // return nameSort
  // }
  


function getTotalNumberOfBorrows(account, books) {
  let result = 0 
  
  for (let bookData in books){
    let match = books[bookData].borrows.find((borrow) => borrow.id === account.id);

      if (match){
        result++
      }
  }
  return result
}

// checks what books are currently checked out by returning an array of the books and authors that are checked out 
// the array has the author object embedded with the books elements
function getBooksPossessedByAccount(account, books, authors) {
  result = [];
  for(let bookCheck in books){
    if(books[bookCheck].borrows[0].id === account.id){
      if(books[bookCheck].borrows[0].returned === false){
        let bookResult = books[bookCheck]

        for(let authorCheck in authors){
          if(authors[authorCheck].id === bookResult.authorId){
            bookResult.author = authors[authorCheck]
            result.push(bookResult);
          }
        }
      }
    }
  }
  return result
}
/* Example of what needs to be returned:
  [
    {
      id: "5f447132320b4bc16f950076",
      title: "est voluptate nisi",
      genre: "Classics",
      authorId: 12,
      author: {
        id: 12,
        name: {
          first: "Chrystal",
          last: "Lester",
        },
      },
      borrows: [
        {
          id: "5f446f2e6059326d9feb9a68",
          returned: false,
        }
*/



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
