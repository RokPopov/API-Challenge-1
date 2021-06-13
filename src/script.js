// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * [x] 1. Create a fetching function and call the API
 * [x] 2. Output the API's response
 * [x] 3. Attach fetchData to an event listener
 * [] 4. Clear output after 3 seconds
 * [] 5. Optional: add loading/error states
 *
 */

const ballSelector = document.querySelector('#ball');

const fetchData = () => {
ballSelector.classList.add('shake__ball');

  fetch(API_ENDPOINT)
    .then(res => res.json())
    .then(res => showAnswer(res.answer));
}


const showAnswer = (answer) => {
  setTimeout(() => {
   document.querySelector('#answer').innerHTML = `<p>${answer}</p>`;
   ballSelector.classList.remove('shake__ball');
  }, 1000)
}

const handleKeyEnter = (event) => {
  // console.log('handleKeyEnter', { event })
  if (event.keyCode === 13) {
    fetchData();
  }
}

document.querySelector('#button').addEventListener('click', () => {
  fetchData();
})