import axios from 'axios'
async function generateJoke() {
    const respnse = await axios.get('https://icanhazdadjoke.com/', {
        headers: {
            Accept: 'application/json'
        }
    })
    return respnse.data.joke;
};

export default generateJoke;