window.addEventListener("load", () => {
  const loading = document.getElementById("loading");
  const header = document.querySelector("header");
  loading.style.opacity = "0";

  setTimeout(() => {
    loading.style.display = "none";
    header.style.opacity = "1";
    header.style.pointerEvents = "auto";
  }, 700);
});
