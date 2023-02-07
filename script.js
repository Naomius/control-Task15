let cities = [];
let specializations = [];
let persons = [];

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
    persons = response[2];


    homeTasks()
})

function getInfoList(people) {
    people.forEach(person => getInfo.call(person));
}
//
//
function getInfo() {
    const {firstName, lastName, locationId} = this.personal;

    const city = cities.find(cityName => cityName.id === locationId).name;
    console.log(`${firstName} ${lastName}, ${city}`);
}

    function homeTasks() {
        // getInfo.call(persons[0])
        // task3();
        // task4()
        // task5();
        // task6();
        // task7();
        task8()
    }
//
//
// //Пункт№3
//
//
// function task3() {
//     let designerUser = specializations.find(item => item.name.toLowerCase() === 'designer');
//         if(designerUser) {
//             let result = persons.filter(item => {
//                 return item.personal.specializationId === designerUser.id;
//             });
//
//             getInfoList(result, 'task3')
//         }
// }

//Пункт№4

// function task4() {
//
//     let frontendUser = specializations.find(item => item.name.toLowerCase() === 'frontend');
//         if (frontendUser) {
//             let reactUser = persons.filter(item => {
//                 return item.personal.specializationId === frontendUser.id
//             })
//                 if (reactUser) {
//                     let result = reactUser.find(user => {
//                         return user.skills.findIndex(person => {
//                             return person.name === 'React';
//                         }) ;
//                         return user > -1;
//                     })
//                     console.log(result)
//                 }
//         }
// }
//
// //Пункт №5
//
// function task5() {
//     const currentDate = new Date()
//     const eighteenYears = 568036800000;
//
//     persons.every(user => {
//         const [day, month, year] = user.personal.birthday.split('.');
//         const userDate = new Date(+year, +month, +day)
//
//         console.log(currentDate - userDate > eighteenYears);
//     })
// }
//
//
//
// //Пункт №6
//

// function task6() {
//
//     let cityId = cities.find(city => city.name === 'Москва').id;
//     let backendId =  specializations.find(item => item.name.toLowerCase() === 'backend').id;
//
//     let moscowBackendUsers = persons.filter(person => {
//       return  person.personal.locationId === cityId && person.personal.specializationId === backendId;
//     })
//
//     let sortValue = moscowBackendUsers.sort((a,b) => {
//         const salaryA = a.request.find(req => req.name === 'Зарплата').value
//         const salaryB = b.request.find(req => req.name === 'Зарплата').value
//
//         return salaryA - salaryB;
//     });
//     console.log(sortValue)
//
// }


// Пункт №7

// function task7() {
//
//     let designerId = specializations.find(item => item.name.toLowerCase() === 'designer').id;
//
//             let designer = persons.filter(item => item.personal.specializationId === designerId);
//             let figmaPhotoDesigner = designer.filter(designer => {
//               const figmaLvl = designer.skills.find(skill => skill.name === 'Figma').level
//               const photoshopLvl = designer.skills.find(skill => skill.name === 'Photoshop').level
//                 return figmaLvl >= 6 && photoshopLvl >= 6;
//             })
//     console.log(figmaPhotoDesigner)
//
// }

//Пункт №8

// function findBestDev(skill) {
//     let maxSkillLevel = 0;
//     let figmaUsers = null;
//     let newFigmaArr = [];
//
//     let commonName = item.skills.find(product => {
//             return product.name === skill;
//         })
// }

function task8() {
//
//                 //figmaUser

    let maxFigmaLevel = 0;
    let figmaUsers = null;
    let newFigmaArr = [];
    persons.forEach(item => {
        let commonName = item.skills.find(productFigma => {
            return productFigma.name === 'Figma'
        })
        if (commonName && commonName.level) {
            let figmaLevel = commonName.level;
            if (!isNaN(figmaLevel) && figmaLevel > maxFigmaLevel) {
                maxFigmaLevel = figmaLevel
                figmaUsers = item
                newFigmaArr = figmaUsers

            }
        }
    })
//
//             //angularUser
//
    let maxAngularLevel = 0;
    let angularUsers = null;
    let newAngularArr = [];
    persons.forEach(item => {
        let commonName = item.skills.find(productAngular => {
            return productAngular.name === 'Angular'
        })
        if (commonName && commonName.level) {
            let angularLevel = commonName.level;
            if (!isNaN(angularLevel) && angularLevel > maxAngularLevel) {
                maxAngularLevel = angularLevel
                angularUsers = item
                newAngularArr = angularUsers
            }
        }
    })
//
//             //GoUser
//
    let maxGoLevel = 0;
    let goUsers = null;
    let newGoArr = [];
    persons.forEach(item => {
        let commonName = item.skills.find(productAngular => {
            return productAngular.name === 'Go'
        })
        if (commonName && commonName.level) {
            let goLevel = commonName.level;
            if (!isNaN(goLevel) && goLevel > maxGoLevel) {
                maxGoLevel = goLevel
                goUsers = item
                newGoArr = goUsers
            }
        }
    })
    let resultArray = [].concat(newFigmaArr, newAngularArr, newGoArr);
    getInfoList(resultArray, 'task8')

}