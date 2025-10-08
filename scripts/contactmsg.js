const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  formMessage.style.display = "none";

  try {
    await emailjs.send("service_7i91hqg", "template_1jfjss7", {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    });

    formMessage.innerHTML = `
      <button id="closeBtn">✖</button>
      Thank you for your message! <br>
      <span>I will get back to you soon.</span>
    `;
    formMessage.className = "success";
    formMessage.style.display = "block";
    document.body.style.overflow = "hidden";
  } catch (error) {
    formMessage.innerHTML = `
      <button id="closeBtn">✖</button>
      Your message wasn't delivered!<br>
      <span>Please try again.</span>
    `;
    formMessage.className = "error";
    formMessage.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  const closeBtn = document.getElementById("closeBtn");
  closeBtn.addEventListener("click", () => {
    formMessage.style.display = "none";
    document.body.style.overflow = "";
  });

  setTimeout(() => {
    formMessage.style.display = "none";
    document.body.style.overflow = "";
  }, 10000);

  form.reset();
});
