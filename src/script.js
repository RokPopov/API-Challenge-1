// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * [x] 1. Create a fetching function and call the API
 * [] 2. Output the API's response
 * [] 3. Attach fetchData to an event listener
 * [] 4. Clear output after 3 seconds
 * [] 5. Optional: add loading/error states
 *
 */

const fetchData = () => {
  fetch(API_ENDPOINT)
    .then(res => res.json())
    .then(res => console.log(res.data))
    

}

fetchData();