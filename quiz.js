function checkAnswers() {
  const questions = [
    {
      questionElement: document.querySelector("input[name='question1']:checked"),
      answer: 4,
    },
    {
      questionElement: document.querySelector("input[name='question2']:checked"),
      answer: 4,
    },
    {
      questionElement: document.querySelector("input[name='question3']:checked"),
      answer: 2,
    },
    {
      questionElement: document.querySelector("input[name='question4']:checked"),
      answer: 1,
    },
    {
      questionElement: document.querySelector("input[name='question5']:checked"),
      answer: 1,
    },
  ];
  var correct = 0;
  var wrong = 0;
  for (var i = 0; i < questions.length; i++) {
    var question = questions[i];
    if (question.questionElement == null) {
      alert("Please answer all the questions!");
      return;
    } else {
      if (question.questionElement.value == question.answer) {
        correct++;
      } else {
        wrong++;
      }
    }
  }
  if (correct == questions.length) {
    alert("All correct!");
  } else {
    alert("You got " + correct + " correct and " + wrong + " wrong!");
  }
}
