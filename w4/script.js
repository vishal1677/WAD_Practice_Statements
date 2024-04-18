// script.js
let displayData = () => {
  let tbody=document.getElementById('tbody');
  tbody.innerHTML="";
  let storedUser=JSON.parse(localStorage.getItem("users"));
  storedUser.map((user,index)=>{
    tbody.innerHTML+=`
    <tr>
    <td>${index+1}</td>
    <td>${user.name}</td>
    <td>${user.email}</td>
    </tr>
    `
  });

};

displayData();

let btn = document.getElementById("btn");
btn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;

  const postObject = {
    email,
    name,
    password,
  };

  let xhr = new XMLHttpRequest();
  // Use local host or https://jsonplaceholder.typicode.com/users/
  xhr.open("POST", "http://localhost:3000/user");
  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  xhr.send(JSON.stringify(postObject));

  xhr.onload = () => {
    console.log(xhr.status)
    if (xhr.status == 201 || xhr.status==200) {
      let storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      storedUsers.unshift(postObject);
      localStorage.setItem("users", JSON.stringify(storedUsers));
      displayData();
    }
  };
});
