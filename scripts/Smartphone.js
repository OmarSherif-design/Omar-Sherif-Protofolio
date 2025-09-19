(function () {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent || "");
    const phoneItem = document.getElementById("phoneItem");
    const phoneLink = document.getElementById("smartPhoneLink");

    if (!isMobile) {
      phoneItem.innerHTML = `
        <div class="contact-btn-disabled">
          <i class="fa-solid fa-phone contactIcon"></i>
          +20 112 420 8295
        </div>`;
    }
  })();