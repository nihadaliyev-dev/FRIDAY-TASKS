import { questions } from "./questions.js";
import { checkTest } from "./app.js";

const userAnswers = structuredClone(questions);
const wrapper = document.querySelector(".wrapper");
export const submit = document.createElement("button");
submit.textContent = "Submit";

submit.setAttribute("id", "submitBtn");

function createQuestion(question, answer) {
  const questionDiv = document.createElement("div");
  const questionTitle = document.createElement("label");
  const questionForm = document.createElement("form");
  questionDiv.style.backgroundColor = answer;

  questionDiv.classList.add("question");
  questionDiv.classList.add(`question-${question.questionId}`);
  questionTitle.classList.add("questionTitle");
  questionTitle.textContent = `${question.questionId}. ${question.questionTitle}`;
  questionTitle.setAttribute("for", "questionTitle");

  questionForm.append(questionTitle);

  question.options.forEach((option) => {
    const questionOptionBox = document.createElement("div");
    const questionOption = document.createElement("input");
    const questionLabel = document.createElement("label");

    questionOption.setAttribute("name", "answer");
    questionOption.setAttribute("id", option);
    questionOption.setAttribute("type", "radio");
    questionOption.setAttribute("value", option.toLocaleLowerCase());

    questionLabel.setAttribute("for", option);
    questionLabel.textContent = option;

    questionOptionBox.append(questionOption, questionLabel);
    questionForm.append(questionOptionBox);
  });

  questionDiv.append(questionForm);
  wrapper.append(questionDiv);
}

questions.forEach((question) => {
  createQuestion(question);
});

wrapper.append(submit);

const result = document.querySelector(".result");
submit.addEventListener("click", (e) => {
  let points = 0;
  e.preventDefault();
  questions.forEach((question) => {
    if (checkTest(question) == false) {
      createQuestion(question, "red");
    } else {
      createQuestion(question, "white");
    }
  });
  result.textContent = `You scored ${points} out of ${questions.length}`;
});
