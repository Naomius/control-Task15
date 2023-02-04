let cities = [];
let specializations = [];
let person = [];

Promise.all(
    [
        fetch('cities.json'),
        fetch('specializations.json'),
        fetch('person.json'),
    ]

).then(async ([citiesResponse, specializationsResponse, personResponse]) => {
    const citiesJson = await citiesResponse.json();
    const specializationsJson = await specializationsResponse.json();
    const personJson = await personResponse.json();
    return [citiesJson, specializationsJson, personJson]

}).then(response => {
    cities = response[0];
    specializations = response[1];
    person = response[2];

    getInfo();
})

function getInfo () {

}