$(document).ready(function () {
  const BccBtn = document.getElementById("BccBtn");
  const popupCancel = document.getElementById("popup-cancel");

  // popup function and elements
  const popup = document.getElementById("popup");
  const dim = document.getElementById("dim");

  BccBtn.addEventListener("click", () => {
    popup.style.visibility = "visible";
    dim.style.visibility = "visible";
  });

  popupCancel.addEventListener("click", () => {
    popup.style.visibility = "hidden";
    dim.style.visibility = "hidden";
  });

  const selectAll = document.getElementById("select-all");
  const users = Array.from(document.getElementsByClassName("user"));
  const selectedNum = document.getElementById("selected-number");

  // popup selections and number of selected users
  selectAll.addEventListener("click", () => {
    if (selectAll.checked == true) {
      // console.log("checked");
      users.forEach((user) => {
        user.setAttribute("checked", "checked");
      });
    } else if (selectAll.checked != true) {
      // console.log("unchecked");
      users.forEach((user) => {
        user.removeAttribute("checked");
      });
    }
    let num = 0;
    users.forEach((user) => {
      if (user.checked == true) {
        num++;
      }
    });
    selectedNum.innerHTML = num;
  });

  // update the number when each checkbox is checked

  users.forEach((user) => {
    user.addEventListener("click", () => {
      selectAll.checked = false;

      let num = 0;
      users.forEach((user) => {
        if (user.checked == true) {
          num++;
        }
      });
      selectedNum.innerHTML = num;
    });
  });

  dim.addEventListener("click", () => {
    popup.style.visibility = "hidden";
    dim.style.visibility = "hidden";
  });
});
