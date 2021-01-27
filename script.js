btnGenerate = document.getElementById('generate-btn');

getRandomPerson();
getRandomPerson();

//Fetch random person
async function getRandomPerson() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    const user = data.results[0];

    const newUser = {
        picture: `${user.picture.large}`,
        name: `${user.name.first} ${user.name.last}`
    } 

    console.log(data);
} 