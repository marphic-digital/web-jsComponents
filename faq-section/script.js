"use strict";

const questions = document.querySelectorAll(".question");
const faqBox = document.querySelectorAll(".faq-box");

// questions.forEach((question, i) => {
//   question.addEventListener("click", () => {
//     faqBox.forEach((box) => {
//       box.classList.remove("show-ans");
//     });
//     faqBox[i].classList.toggle("show-ans");
//   });
// });

questions.forEach((question, i) => {
  question.addEventListener("click", function () {
    faqBox.forEach((box) => {
      box.classList.remove("show-ans");
    });
    faqBox[i].classList.toggle("show-ans");
  });
});
