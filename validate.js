  const form = document.getElementById('form');

  form.addEventListener('submit', function(event) {
    const name = document.getElementById('name');
     // const email = document.getElementsById'email');
    event.preventDefault();

    const nameValue = name.value;
//     const emailValue = email.value;

    // creating object to local storage 
    localStorage.setItem('name', nameValue);    
//     localStorage.setItem('email', emailValue)

    // Simulate an HTTP redirect:
    window.location.replace("http://localhost:5500/result.html");
  })
