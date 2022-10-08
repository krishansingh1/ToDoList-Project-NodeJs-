let btn = document.getElementById("list_delete2");
let str = "";

//Event Listener to Check which item is checked and after it's fetched its ID and create an array of it
btn.addEventListener("click", function () {
  let checks = document.querySelectorAll('input[type="checkbox"]:checked');
  console.log(checks);
  for (let i = 0; i < checks.length; i++) {
    if (i == 0) {
      str += `${checks[i].id}`;
    } else {
      str += `|${checks[i].id}`;
    }
  }
  
  //Sending the Ids to the server
  
  window.location = `http://localhost:8000/delete-list/?id=${str}`;
});
