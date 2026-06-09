const subscriptionPage = document.getElementById("subscription");
const successPage = document.getElementById("success");
const submitButton = document.getElementById("subscription-btn");
const emailAdress = document.getElementById("email");
const errorMessage = document.getElementById("email-error");
const emailSuccess = document.getElementById("emailValue");
const desktopImg = document.querySelector(".illustration-desktop");
const mobileImg = document.querySelector(".illustration-mobile");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const emailValue = emailAdress.value;

  errorMessage.textContent = "";

  if (emailValue === "") {
    errorMessage.textContent = "Email is required";
    emailAdress.classList.add("error-input");
    return;
  }

  if (!emailAdress.checkValidity()) {
    errorMessage.textContent = "Valid email required";
    return;
  } else {
    subscriptionPage.style.display = "none";
    successPage.style.display = "block";
    desktopImg.classList.add("hidden");
    mobileImg.classList.add("hidden");
    emailSuccess.textContent = emailValue;
  }
});
