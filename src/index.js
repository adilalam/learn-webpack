import generateJoke from './generate-joke'
import './styles/main.scss'
import laughing from './assets/laughing.svg'

const img = document.getElementById('imgLaugh');
img.src = laughing;

async function getData() {
    let data = await generateJoke();
    document.getElementById('joke').innerHTML = data;
}

getData()

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', getData)