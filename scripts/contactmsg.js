const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  formMessage.style.display = "none";

  try {
    const result = await emailjs.send(
      "service_7i91hqg",
      "template_1jfjss7",
      {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
      }
    );

    formMessage.innerHTML = `<button id="closeBtn">✖</button>Thank you for your message! <br><span>I will get back to you soon.</span>`;
    formMessage.style.color = "#00abf0";
    formMessage.style.display = "block";
    formMessage.style.position = "absolute";
    formMessage.style.borderRadius = "20px";
    formMessage.style.border = "5px solid var(--panel)";
    formMessage.style.fontSize = "20px";
    formMessage.style.fontWeight = "900";
    formMessage.style.backdropFilter = "blur(15px)";
    formMessage.style.background = "rgba(255,255,255,0.1)";
    formMessage.style.padding = "100px";
    formMessage.style.lineHeight = "30px";
    formMessage.style.zIndex = "999";
    document.body.style.overflow = "hidden";

    const span = formMessage.querySelector("span");
    span.style.color = "#ffffffff";
    span.style.fontWeight = "500";
    span.style.fontSize = "15px";

    const closeBtn = document.getElementById("closeBtn");
    closeBtn.style.position = "absolute";
    closeBtn.style.top = "10px";
    closeBtn.style.right = "15px";
    closeBtn.style.background = "transparent";
    closeBtn.style.border = "none";
    closeBtn.style.fontSize = "22px";
    closeBtn.style.color = "#fff";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.fontWeight = "bold";

    closeBtn.addEventListener("click", () => {
      formMessage.style.display = "none";
      document.body.style.overflow = "";
    });

    form.reset();
    setTimeout(() => {
    formMessage.style.display = "none";
    document.body.style.overflow = ""; }, 10000);

  } catch (error) {
    formMessage.innerHTML = `<button id="closeBtn">✖</button>Your message wasn't delivered!<br><span>Please try again.</span>`;
    formMessage.style.color = "#ff0000ff";
    formMessage.style.display = "block";
    formMessage.style.position = "absolute";
    formMessage.style.borderRadius = "20px";
    formMessage.style.border = "5px solid var(--panel)";
    formMessage.style.fontSize = "20px";
    formMessage.style.fontWeight = "900";
    formMessage.style.backdropFilter = "blur(15px)";
    formMessage.style.background = "rgba(255,255,255,0.1)";
    formMessage.style.padding = "100px";
    formMessage.style.lineHeight = "30px";
    formMessage.style.zIndex = "999";
    document.body.style.overflow = "hidden";

    const span = formMessage.querySelector("span");
    span.style.color = "#ffffffff";
    span.style.fontWeight = "500";
    span.style.fontSize = "15px";

    const closeBtn = document.getElementById("closeBtn");
    closeBtn.style.position = "absolute";
    closeBtn.style.top = "10px";
    closeBtn.style.right = "15px";
    closeBtn.style.background = "transparent";
    closeBtn.style.border = "none";
    closeBtn.style.fontSize = "22px";
    closeBtn.style.color = "#fff";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.fontWeight = "bold";

    closeBtn.addEventListener("click", () => {
      formMessage.style.display = "none";
      document.body.style.overflow = "";
    });

    setTimeout(() => {
    formMessage.style.display = "none";
    document.body.style.overflow = "";}, 10000);
  }
});
