// selecting pop-box,pop-overlay,button

let over_lay = document.querySelector(".pop-overlay");
let pop_box = document.querySelector(".popup-box");
let add_pop_btn = document.getElementById("add-popup-button");

// display pop box:
add_pop_btn.addEventListener("click", function () {
  over_lay.style.display = "block";
  pop_box.style.display = "block";
});

let cancel_btn = document.getElementById("cancel-popup");
cancel_btn.addEventListener("click", function (event) {
  // prevendefault used to stop automatic submit or refresh:
  event.preventDefault();
  over_lay.style.display = "none";
  pop_box.style.display = "none";
});

// ADD Book Details:

// Select Container,add book,book title,book authour book description

let container = document.querySelector(".container");
let book_title = document.getElementById("book-title-input");
let book_author = document.getElementById("book-author-input");
let book_description = document.getElementById("book-description-input");
let add_book_btn = document.getElementById("add-book");

add_book_btn.addEventListener("click", function (event) {
  event.preventDefault();

  let div = document.createElement("div");
  div.setAttribute("class", "book-container");
  div.innerHTML = `<h2>${book_title.value}</h2> <h5>Authour:${book_author.value}</h5> <p>${book_description.value}</p>
       <button onclick="deletebook(event)">Delete</button>
      </div>`;
  container.append(div);
  over_lay.style.display = "none";
  pop_box.style.display = "none";
});

function deletebook(event) {
  event.target.parentElement.remove();
}
