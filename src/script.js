// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * [x] 1. Create a fetching function and call the API
 * [x] 2. Output the API's response
 * [x] 3. Attach fetchData to an event listener
 * [x] 4. Clear output after 2 seconds
 * [] 5. Optional: add loading/error states
 *
 */

const ballSelector = document.querySelector('#ball');
const buttonSelector = document.querySelector('#button');
const answerSelector = document.querySelector('#answer');
const inputSelector = document.querySelector('#input');

const fetchData = () => {
ballSelector.classList.add('shake__ball');
  fetch(API_ENDPOINT)
    .then(res => res.json())
    .then(res => showAnswer(res.answer));
    deleteQuestionAndAnswer();
}

const showAnswer = (answer) => {
  setTimeout(() => {
   answerSelector.innerHTML = `<p>${answer}</p>`;
   ballSelector.classList.remove('shake__ball');
  }, 600)
}

const handleKeyEnter = (event) => {
  // console.log('handleKeyEnter', { event })
  if (event.keyCode === 13) {
    fetchData();
  }
}

buttonSelector.addEventListener('click', () => {
  fetchData();
})

const deleteQuestionAndAnswer = () => {
  setTimeout(() => {
    answerSelector.innerHTML = '';
    inputSelector.value='';
  }, 2000)
}

