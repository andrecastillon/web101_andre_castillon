const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  setLocalStorage();
  redirectToResult();
});

function setLocalStorage() {
  const name = document.getElementById("name");
  const nameValue = name.value;

  const email = document.getElementById("email");
  const emailValue = email.value;

  const comments = document.getElementById("comments");
  const commentsValue = comments.value;

  const contactback = document.getElementById("contactback");
  const contactbackValue = contactback.value;

  const bday = document.getElementById("bday");
  const bdayValue = bday.value;

  localStorage.setItem("name", JSON.stringify(nameValue));
  localStorage.setItem("email", JSON.stringify(emailValue));
  localStorage.setItem("comments", JSON.stringify(commentsValue));
  localStorage.setItem("contactback", JSON.stringify(contactbackValue));
  localStorage.setItem("bday", JSON.stringify(bdayValue));
}

function redirectToResult() {
  window.location.href = "result.html";
}