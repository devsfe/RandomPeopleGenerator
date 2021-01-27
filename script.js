const btnGenerate = document.getElementById('generate-btn');
const container = document.getElementById('container');
const personName = document.getElementById('name');
const personImage = document.getElementById('personImage');
const personAge = document.getElementById('age');
const personEmail = document.getElementById('email');
const personCountry = document.getElementById('country');

let data = new Array;

//Fetch and get random person
async function getRandomPerson() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    const user = data.results[0];

    const newUser = {
        picture: `${user.picture.large}`,
        name: `${user.name.first} ${user.name.last}`,
        age: `${user.dob.age}`,
        email: `${user.email}`,
        country: `${user.location.country}`
    } 

    addData(newUser);
} 

// Add new obj to data arr
function addData(obj) {
    data.push(obj);

    updateDOM();
}

// Update DOM
function updateDOM(providedData = data) {

    data.forEach(function(element) {
       personName.innerText = 'Name: ' + element.name; 
       personImage.src = element.picture;
       personAge.innerText = 'Age: ' + element.age;
       personEmail.innerText = 'Email: ' + element.email;
       personCountry.innerText = 'Country: ' + element.country;
    });
}


btnGenerate.addEventListener('click', getRandomPerson);