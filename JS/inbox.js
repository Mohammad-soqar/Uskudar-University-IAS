$(document).ready(function () {
  const deleteBtn = document.getElementById("delete-btn");
  const noBtn = document.getElementById("no-btn");

  // popup events and functions
  const popupDiv = document.getElementById("popup-div");
  const dimDiv = document.getElementById("dim-div");

  deleteBtn.addEventListener("click", function () {
    popupDiv.style.visibility = "visible";
    dimDiv.style.visibility = "visible";
  });

  noBtn.addEventListener("click", function () {
    popupDiv.style.visibility = "hidden";
    dimDiv.style.visibility = "hidden";
  });

  // background color change for clicked user card
  const cards = document.getElementsByClassName("msg-card");

  Array.from(cards).forEach((card) => {
    card.addEventListener("click", () => {
      Array.from(cards).forEach((sibling) =>
        sibling.classList.remove("active")
      );
      card.classList.add("active");
    });
  });

  dimDiv.addEventListener("click", () => {
    popupDiv.style.visibility = "hidden";
    dimDiv.style.visibility = "hidden";
  });
});
