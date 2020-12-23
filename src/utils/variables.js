
const production = false

export let IMAGE_URL

if (production) {
  IMAGE_URL = 'https://inislam.herokuapp.com/';
} else {
  IMAGE_URL = 'http://localhost:5000/';
}
