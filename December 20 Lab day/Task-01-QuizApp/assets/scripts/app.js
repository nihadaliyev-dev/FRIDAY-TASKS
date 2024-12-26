import { questions } from "./questions.js";
import { submit } from "./index.js";
export function checkTest(question) {
  const questionDiv = document.querySelector(
    `.question-${question.questionId}`
  );
  const answer = questionDiv.querySelector(`input[type="radio"]:checked`);
  if (answer && question.correctAnswer.toLocaleLowerCase() == answer.value) {
    return true;
  } else {
    return false;
  }
}

// const result = document.querySelector(".result");
// submit.addEventListener("click", (e) => {
//   let points = 0;

//   e.preventDefault();
//   questions.forEach((question) => {
//     if (checkTest(question)) {
//       points += 1;
//     }
//   });
//   result.textContent = `You scored ${points} out of ${questions.length}`;
// });
