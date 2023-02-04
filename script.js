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

    getInfo.call();

})

// function getInfo () {
//     let usersInfo = person.map(item => {
//         let city = cities.find(function (cityName) {
//             return cityName.id === item.personal.locationId;
//         });
//         if (city && city.name) {
//             item.city = city.name;
//         }
//         delete item.personal.locationId
//         return item;
//     })
//   let userFullName = person.map(item => {
//       return {
//           firstName: item.personal.firstName,
//           lastName: item.personal.lastName,
//           city: item.city
//       }
//   })
//     console.log(this.firstName + ' ' + this.lastName)
//
//
// }

// let usersList = [];
// person.forEach(item => {
//     item.personal.forEach(user => {
//         if (user.personal) {
//             usersList.push(user.personal);
//         }
//     });
// });


    //Пункт№3

// function getInfo () {
//     let designerUser = specializations.find(item => item.name.toLowerCase() === 'designer');
//         if(designerUser) {
//             let result = person.filter(item => {
//                 return item.personal.specializationId === designerUser.id;
//             })
//
//             console.log(result)
//         }
//
// }

     //Пункт№4

function getInfo() {
    // let result = person;
    //     result.forEach(item => {
    //         item.skills.some(item => {
    //             return item.name === 'React'
    //     })
    // })
    let result = person.some(item => {
        if (item.skills = 'React') {
            return  true
        }
            // console.log(item.personal)

    })
    console.log(result)
}