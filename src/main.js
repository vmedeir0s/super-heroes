const URL_BASE = 'https://superheroapi.com/api.php/6044844938964560/';
const displayImgEl = document.querySelector('.display-img');
const displayEl = document.querySelector('.display-name');
const btnEl = document.querySelector('.btn-random');

const fetchApi = async (randomNumber) => {
  const response = await fetch(`${URL_BASE}${randomNumber}`);
  const result = await response.json();
  return result;
};

btnEl.addEventListener('click', async ()=> {
  const randomNumber = Math.floor(Math.random() * (831 - 830) + 830);
  try {
    const {image, name} = await fetchApi(randomNumber);
    displayImgEl.src = image.url;
    displayEl.innerHTML = name;
  } catch (error) {
    window.alert('deu ruim');
  }
});