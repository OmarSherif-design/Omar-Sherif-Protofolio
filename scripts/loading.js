// Disable scroll at start
document.documentElement.classList.add("no-scroll");

window.addEventListener("load", () => {
  const loading = document.getElementById("loading");
  const header = document.querySelector("header");

  // Get the CSS background image URL
  const bgImage = getComputedStyle(document.querySelector('.about-photo .img')).backgroundImage;

  // Extract URL from url("...")
  const imageUrl = bgImage.slice(5, -2);

  // Preload the background image
  const img = new Image();
  img.src = imageUrl;

  img.onload = () => {
    // Image loaded → hide loader
    loading.style.opacity = "0";

    setTimeout(() => {
      loading.style.display = "none";

      // Show header
      header.style.opacity = "1";
      header.style.pointerEvents = "auto";

      // Enable scrolling again
      document.documentElement.classList.remove("no-scroll");

    }, 700);
  };
});
