(function () {
  const email = "0marsherif.pro85@gmail.com";
  const gmailLink =
    "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(email);
  const mailtoLink = "mailto:" + email;

  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent || "");

  // Select ALL elements with class "smartEmailLink"
  const links = document.querySelectorAll(".smartEmailLink");

  links.forEach(link => {
    link.href = isMobile ? mailtoLink : gmailLink;
    if (!isMobile) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener");
    }
  });
})();

