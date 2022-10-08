let btn = document.getElementById("list_delete2");
let listOptions = document.querySelector("select");
let color = document.getElementById("list_content_category");
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

  window.location = `http://localhost:8000/delete-list/?id=${str}`;
});

// console.log(listOptions);
// console.log(listOptions.options);
// console.log(color);

// if (listOptions.options[0]) {
//   color.classList.add("background_color1");
// }

// if (listOptions.options[1]) {
//   color.classList.remove("background_color1");
//   color.classList.add("background_color2");
// }

// if (listOptions.options[2]) {
//   color.style.backgroundColor = "violet";
// }
