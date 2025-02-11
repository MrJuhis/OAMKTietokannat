let book = {
  "book_1": { "name": "Everything You Ever Wanted to Know", "author": "Upton", "isbn": "082305649x" },
  "book_2": { "name": "Photography", "author": "Vilppu", "isbn": "205711499" },
  "book_3": { "name": "Drawing Manual Vilppu", "author": "Zelanshi", "isbn": "1892053039" },
  "book_4": { "name": "TBA", "author": "Zelanshi", "isbn": "0534613932" },
  "book_5": { "name": "Shaping Space", "author": "Speight", "isbn": "0534613934" },
  "book_6": { "name": "Art Since 1940", "author": "Speight", "isbn": "0131839780" },
  "book_7": { "name": "Make it in Clay", "author": "Stokstad", "isbn": "0076417011" },
  "book_8": { "name": "Art History Vol II & ala carte lab", "author": "Stokstad", "isbn": "205795617" },
  "book_9": { "name": "Accounting Concepts", "author": "Albrecht", "isbn": "1111287856" },
  "book_10": { "name": "Intermediate Accounting", "author": "Stice", "isbn": "0538479736" },
  "book_11": { "name": "Management Info Systems", "author": "Marakas", "isbn": "9780073376813" },
  "book_12": { "name": "Management", "author": "Williams", "isbn": "9780757524028" },
  "book_13": { "name": "Leadership Wisdom of Jesus", "author": "Manz", "isbn": "9781609940041" },
  "book_14": { "name": "Business Law Today", "author": "Miller", "isbn": "9780324786156" },
  "book_15": { "name": "Management Info Systems", "author": "Marakas", "isbn": "9780073376813" }
}

function getAllBooks()
{
	Object.values(book).forEach((b) => {
		console.log(b);
	});
};

function getOneBook(x)
{
	console.log(Object.values(book)[x]);
}

function addBook(id_book, name, author, isbn)
{
	book[`book_${id_book}`] = { name, author, isbn };
}