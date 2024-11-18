const shareIcon = document.getElementById("share-icon");
const user = document.getElementById("user");
const shareActive = document.getElementById("share-active");

shareIcon.addEventListener("click", (event) => {
  shareActive.classList.toggle("hidden");
  //    user.classList.toggle("hidden");
});
