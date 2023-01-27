const box1 = document.querySelector(".box-1");
const box2 = document.querySelector(".box-2");
const submitButton = document.querySelector(".submit-button");
const rateAgain = document.querySelector(".rate-again");
const buttons = document.querySelectorAll(".btn");
const rating = document.getElementById("rating");

submitButton.addEventListener("click", () => {
    box2.classList.remove("hidden");
    box1.style.display = "none";
})
rateAgain.addEventListener("click", () => {
    box2.classList.add("hidden");
    box1.style.display = "block";
})

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        rating.innerHTML = button.innerHTML;
    })
})
