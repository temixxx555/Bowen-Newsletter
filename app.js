const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

async function getquote(url) {
  const respone = await fetch(url);
  var data = await respone.json();

  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}
getquote(api_url);

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "---- by " +
      author.innerHTML,
    "tweet Window",
    "width=600, height=300"
  );
}
function toggleMenu() {
  var menu = document.getElementById("dropdown-menu");
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
  } else {
    menu.classList.add("show");
  }
}
