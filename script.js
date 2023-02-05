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
        //Не додумал с call, так как не знаю, правильно ли я проводил поиск ниже(и как это в логику связать одну) ..=)

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

// function getInfo() {
//
//     //Ниже два варианта решения, первый я правда не довел до конца, а второй вроде рабочий. Но хотел узнать,
//     // плане логики поиска, какой из вариантов правильнее будет? Или может есть еще проще)
//
//              //Вариант №1
//     // let frontendUser = specializations.find(item => item.name.toLowerCase() === 'frontend');
//     //     if (frontendUser) {
//     //         let reactUser = person.filter(item => {
//     //             return item.personal.specializationId === frontendUser.id;
//     //         })
//     //            let result = reactUser.some(item => {
//     //                return item.skills.name === 'React'
//     //            })
//     // console.log(result)
//     //             }
//
//         //Вариант №2
//     let result = person.find(item => {
//         let index = item.skills.findIndex(skill => {
//             return skill.name === 'React';
//         })
//         return index - 1;
//     })
//     console.log(result)
// }

        //Пункт №5
        //Егор, тут не разобрался, как с датой поступить, не докрутил. Её по идее нужно колбэком вставить, но наверное
        //до отработки метода every(он я так понимаю уже заключительными будет, когда будут сравниваемые возраста)

// function getInfo() {
//     let usersList = person.reduce((accum, item) => {
//             accum.push(item.personal);
//             return accum
//         }, [])
//     let usersAge = usersList.every(function call(callback) {
//        return item.birthday >= '2006' || item.birthday <= '1900'
//     })
// console.log(usersAge)
// }
//
// function getCurrentAge(date) {
//     return ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
// }
// console.log(getCurrentAge('1988-09-18'));


   //Пункт №6

// function getInfo() {
//     // let cityId =  cities.find(item => item.name.toLowerCase() === 'Москва');
//     // let backendId =  specializations.find(item => item.name.toLowerCase() === 'backend');
//     //     if (backendId) {
//     //         let backendConnection = person.filter(item => {
//     //             return item.personal.specializationId === backendId.id
//     //         })
//     // console.log(backendConnection)
//     //     }
//     let result = person.map(item => {
//         let city = cities.find(cityName => {
//             return cityName.id === item.personal.locationId;
//         });
//         if (city && city.name) {
//             item.city = city.name;
//         }
//         delete item.personal.locationId
//
//         let specializationId = specializations.find(specName => {
//             return specName.id === item.personal.specializationId
//         });
//         if (specializationId && specializationId.name) {
//             item.specializationId = specializationId.name;
//         }
//         delete item.personal.specializationId
//         return item;
//     })
//     let backendUser = result.filter(item => {
//         return item.specializationId === 'backend' && item.city === 'Москва'
//
//     })
//     let sortValue = backendUser.sort((a,b) => {
//         return a.request.value - b.request.value;
//     })
//     console.log(sortValue)
// }


            //Пункт №7

function getInfo() {
    let designerUsers = specializations.find(item => {
        return item.name.toLowerCase() === 'designer';
    })

    let specializationId = designerUsers.id;
    let resDesigners = person.filter(item => {
        return item.personal.specializationId === specializationId;
    })
    let result = resDesigners.filter(item => {
      return item.skills.value >= 6 && item.skills.value >= 6
    })
    console.log(result)
}
