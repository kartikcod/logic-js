// const question = [{
//     'que': 'Which of the following is markup language?',
//     'a': 'HTML',
//     'b': 'Javascript',
//     'c': 'Php',
//     'd': 'c',
//     'correct': 'a'
// },
// {
//     'que': 'Which of the following is markup language?',
//     'a': 'HTML',
//     'b': 'Javascript',
//     'c': 'Php',
//     'd': 'c',
//     'correct': 'a'
// },
// {
//     'que': 'What does css stand for?',
//     'a': 'Hypertext markup language',
//     'b': 'casecading style sheet',
//     'c': 'jason update notation',
//     'd': 'Helicopter terminal motorboat lanborginy',
//     'correct': 'b'
// }

// ]
// let index = 0;
// let total = question.length;
// let right = 0,
//     wrong = 0;
// const quesBox = document.getElementById("quesBox");
// const optionInputs = document.querySelectorAll(".options");
// const loadQuestion = () => {
//     const data = question[index];
//     quesBox.innerText = `${index + 1}) ${data.que}`;
//     optionInputs[0].nextElementSibling.innerText = data.a;
//     optionInputs[1].nextElementSibling.innerText = data.b;
//     optionInputs[2].nextElementSibling.innerText = data.c;
//     optionInputs[3].nextElementSibling.innerText = data.d;
// }
// const submitQuiz = () => {
//     const ans = getAnswer();
// }
// const getAnswer = () => {
//     optionInputs.forEach(
//         (input) => {
//             if (input.Checked) {
//                 console.log(input.value);
//             }

//         }
//     )
// }

// loadQuestion();

var