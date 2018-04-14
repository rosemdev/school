const petsData = [
    {
        name: "Purrsloud",
        species: "Cat",
        favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
        birthYear: 2018,
        photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    },
    {
        name: "Barksalot",
        species: "Dog",
        birthYear: 2017,
        photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
    },
    {
        name: "Meowsalot",
        species: "Cat",
        favFoods: ["tuna", "catnip", "celery"],
        birthYear: 2012,
        photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
    }
];


let template = document.querySelector('#app');


function petTemplate(pet) {
    return `
        <div class="animal">
            <img class = "pet-photo" src="${pet.photo}">
            <h2 class="pet-name">${pet.name} <span class = "species">(${pet.species})</h2>
            <p><strong>Age: </strong>${age(pet.birthYear)}</p>
            ${pet.favFoods ? foods(pet.favFoods) : ''}
        </div>
    `

}

function age(birthdayYear) {
    let calculatedAge = new Date().getFullYear() - birthdayYear;

    if (calculatedAge === 1) {
        return '1 year old'
    } else if (calculatedAge === 0) {
        return 'Baby'
    } else {
        return `${calculatedAge} years old`
    }
}

function foods(foods) {
    return `
        <h4>Favourite foods</h4>
        <ul class="foods-list">
            ${foods.map(food => `<li>${food}</li>`).join('')}
        </ul>
    `
}

template.innerHTML = `
    <h1 class="app-title">Pets (${petsData.length} results)</h1>
    ${petsData.map(petTemplate).join('')}
    <p class="footer">These ${petsData.length} pets were added recently. Check back soon for updates</p>
`;

