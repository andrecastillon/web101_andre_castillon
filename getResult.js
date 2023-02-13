function getResult(){

  // getting items to local storage 
  const nameValue = localStorage.getItem("name")
  const emailValue = localStorage.getItem("email")
  const commentsValue = localStorage.getItem("comments")
  const contactbackValue = localStorage.getItem("contactback")
  const bdayValue = localStorage.getItem("bday")
  // console.log(nameValue)
  document.getElementById("nameResult").innerHTML = nameValue
  document.getElementById("emailResult").innerHTML = emailValue
  document.getElementById("commentsResult").innerHTML = commentsValue
  document.getElementById("contactbackResult").innerHTML = contactbackValue
  document.getElementById("bdayResult").innerHTML = bdayValue
}