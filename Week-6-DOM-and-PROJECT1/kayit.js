// const tbody = table.appendChild(document.createElement("tbody"));

// function booksObject(object) {
//   for (let key in object) {
//     let obj = object[key];
//     var tr = tbody.appendChild(document.createElement("tr"));
//     for (let prop in obj) {
//       if (prop === "link") {
//         var td = tr.appendChild(document.createElement("td"));
//         var img = td.appendChild(document.createElement("img"));
//         img.setAttribute("src", obj[prop]);
//         img.setAttribute("class", "img-fluid img-thumbnail");
//       } else {
//         var td = tr.appendChild(document.createElement("td"));
//         td.textContent = obj[prop];
//       }
//     }
//     var td = tr.appendChild(document.createElement("td"));
//     const a = td.appendChild(document.createElement("a"));
//     a.setAttribute('href', '#');    
//   }
// }
// booksObject(books);



// const title = "TheGreatGatsby";
// const author = "F. Scott Fitzgerald";
// const link =
//     "https://images-na.ssl-images-amazon.com/images/I/51vv75oglyL._SL160_.jpg";

// // const th3 = new Books(title, author, link);
// // const th = tr.appendChild(document.createElement("th"));
// // th.setAttribute("scope", "col");
// // th.textContent = "Book Title";

// const book1 = new Books(title, author, link);
// console.log(book1);
// UI.addTrToUI(book1);