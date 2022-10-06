let btn = document.getElementById("list_delete2");
let str = "";

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
  window.location = `http://localhost:8000/delete-list/${str}`;
});
