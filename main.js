document.addEventListener("DOMContentLoaded", function(e) {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(e) {
      return e.json();
    })
    .then(function(e) {
      e.forEach(function(e) {
        let ul = document.querySelector(".user");
        let li = document.createElement("li");
        li.setAttribute("onclick", "liOnCLick(this)");
        li.setAttribute("value", `${e.id}`);
        let h3 = document.createElement("h3");
        h3.innerText = e.name;
        li.appendChild(h3);
        ul.appendChild(li);
      });
    });
});

function liOnCLick(e) {
  
  let div = document.querySelector(".divi");
  div.style.display="block";

  let ul = document.querySelector(".post");
  ul.innerHTML = null;
  fetchPost(parseInt(e.getAttribute("value")));
}

function fetchPost(id) {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(e) {
      return e.json();
    })
    .then(function(e) {
      e.forEach(function(e) {
        if (id === e.userId) {
          let ul = document.querySelector(".post");
          let li = document.createElement("li");
          let h3 = document.createElement("h3");
          h3.innerText = e.title;
          li.appendChild(h3);
          console.log(li)
          ul.appendChild(li);
        }
      });
    });
}
