const texts = ["Frontend Developer", "Web Designer", "UI/UX Designer", "Logo Designer", "PhotoEditor"]; 
const typingElement = document.getElementById("typing");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetween = 1500;

function type() {
    const currentText = texts[textIndex];
    typingElement.textContent = currentText.slice(0, charIndex);

    if (!isDeleting && charIndex < currentText.length) {
        charIndex++;
        setTimeout(type, typingSpeed);
    }
    else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, deletingSpeed);
    }
    else if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, delayBetween);
    }
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, typingSpeed);
    }
}

type();
