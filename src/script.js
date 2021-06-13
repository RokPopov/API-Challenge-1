// API
const API_ENDPOINT = 'https://yesno.wtf/api';

// FLAGS
let isRequestInProgress = false;

/**
 * STEPS:
 *
 * [x] 1. Create a fetching function and call the API
 * [x] 2. Output the API's response
 * [x] 3. Attach fetchData to an event listener
 * [x] 4. Clear output after 2 seconds
 * [x] 5. Optional: add loading/error states
 *
 */

const ballSelector = document.querySelector('#ball');
const buttonSelector = document.querySelector('#button');
const answerSelector = document.querySelector('#answer');
const inputSelector = document.querySelector('#input');
const errorSelector = document.querySelector('#error');

const setIsRequestInProgress = (value) => {
  isRequestInProgress = value;
}

const setDisableButtonState = (isDisabled) => {
  if(isDisabled) {
  buttonSelector.setAttribute('disabled', 'disabled');
  } else {
    buttonSelector.removeAttribute('disabled')
  }
}

const fetchData = () => {
  setIsRequestInProgress(true);
  setDisableButtonState(true);
  ballSelector.classList.add('shake__ball');
  fetch(API_ENDPOINT)
    .then(res => res.json())
    .then(res => showAnswer(res.answer));
}

const showAnswer = (answer) => {
  setTimeout(() => {
   answerSelector.innerHTML = `<p>${answer}</p>`;
   ballSelector.classList.remove('shake__ball');
   deleteQuestionAndAnswer();
  }, 600);
}

const getAnswer = () => {
  if(isRequestInProgress) return;
  if(!inputSelector.value) return showError();
  fetchData();
}

const handleKeyEnter = (event) => {
  // console.log('handleKeyEnter', { event })
  if(isRequestInProgress) return;
  if(!inputSelector.value) return;
  
  if (event.keyCode === 13) {
    fetchData();
  }
}

buttonSelector.addEventListener('click', getAnswer);

const deleteQuestionAndAnswer = () => {
  setTimeout(() => {
    answerSelector.innerHTML = '';
    inputSelector.value='';
    setIsRequestInProgress(false);
    setDisableButtonState(false);
  }, 2000);
}

const showError = () => {
  errorSelector.innerHTML = 'Did you ask the question? No. Feel free to do so.';
  setTimeout(() => {
    errorSelector.innerHTML = '';
  }, 2000);
}