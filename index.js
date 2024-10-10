
// // step 2
// let submitLoop = document.querySelector('.submit');
// let arrStueaudent = ['mazen', 'ahmed', 'ali', 'hassen', 'ashraf', 'ismeal'];
// let arr = document.querySelector('.arr');
// let res = document.querySelector('.res');

// // step 3
// for (let i = 0; i < arrStueaudent.length; i++) {
//     arr.innerHTML += arrStueaudent[i] + '-';
// }

// // step 4
// submitLoop.addEventListener('click', () => {
//     let inputLoop = document.querySelector('.input-loop').value.toLowerCase();
//     // for (let student of arrStueaudent) {
//     //     let loweredCase = student.toLowerCase();
//     //     if (inputLoop == loweredCase) {
//     //         res.innerHTML = `${inputLoop} is in school`;
//     //         break;
//     //     }
//     //         res.innerHTML = `${inputLoop} is Not in school`;
//     // }
//     // while
//     let student = 0;
//     while(student < arrStueaudent.length - 1) {
//         student++;
//         let loweredCase = arrStueaudent[student].toLowerCase();
//         if (inputLoop == loweredCase) {
//             res.innerHTML = `${inputLoop} is in school`;
//             break;
//         }
//             res.innerHTML = `${inputLoop} is Not in school`;
//     }
// })

// // array 2D
// let classes = [
//     ['mazen', 'ashraf', 'hassen'],
//     ['ahmed', 'ail', 'ismeal'],
//     ['smahe', 'selam']
// ];

// for (let i = 0; i < classes.length; i++) {

//     let cureentClass = classes[i]
//     document.querySelector('#class').innerHTML += `<br> class ${i + 1}`
//     for (let j = 0; j < cureentClass.length; j++) {
//         let st = cureentClass[j]
//         document.querySelector('#class').innerHTML += ` ${st} -- `
//     }
// }

// for(let i = 1; i <= 10; i++) {
//     for(let j = 1; j <= 10; j++) {
//         document.querySelector('.num').innerHTML += `<br> ${i} X ${j} = ${i * j}`;
//     }
// }


// function reveArray (arr) {
//     if (arr.length === 0) {
//         return [];
//     }else {
//         return [arr[arr.length - 1]].concat(reveArray(
//             arr.slice(0, arr.length - 1)
//         ))
//     }
// }


// Challenge Anonymous
// let convert = document.querySelector('.convert')

// function convertBg() {
//     // 16777215 هو أكبر عدد يمكن تمثيله في نظام الألوان الست عشري (hex color code)
//     // أخيرًا، يتم تحويل الرقم الصحيح الناتج إلى نظام الأعداد الست عشرية باستخدام الدالة .toString(16)
//     let randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     document.body.style.backgroundColor = '#' + randomColor;
// }

// convert.addEventListener('click', () => {
//     setInterval(convertBg, 2000);
// })

// // Challenge functions arrays
// let arr = [20, 30, 40, 50, 60, 90];

// let myArr = arr.reduce((previousValue, currentValue) => {
//     return previousValue + currentValue
// })
// let newArr = [myArr, arr.length]
// console.log(newArr);



// function gravity_flip(columns) {
//     // write your code here
//     let n = columns.length;

//     for (let i = 0; i < n - 1; i++) {
//         if (columns[i] > columns[i + 1]) {
//             columns[i] = columns[i + 1];
//         }
//     }

//     for (let i = n - 1; i > 0; i--) {
//         if (columns[i] < columns[i - 1]) {
//             columns[i - 1] = columns[i];
//         }
//     }
//     return columns
// }
// const inputCubes = [3, 1, 2, 4];
// const res = gravity_flip(inputCubes);
// console.log(res)

// // Challenge Object
// let students = [
//     {
//         firstName: 'mazen',
//         lastName: 'ashraf',
//         age: 23,
//         year: 2001,
//         fullName: () => {
//             console.log(this.firstName + '' + this.lastName)
//         }
//     },
//     {
//         firstName: 'mo',
//         lastName: 'ismeal',
//         age: 23,
//         year: 2001,
//         fullName: () => {
//             console.log(this.firstName + '' + this.lastName)
//         }
//     },
//     {
//         firstName: 'marwan',
//         lastName: 'hassen',
//         age: 23,
//         year: 2001,
//         fullName: () => {
//             console.log(this.firstName + ' ' + this.lastName)
//         }
//     },
//     {
//         firstName: 'seaad',
//         lastName: 'ail',
//         age: 23,
//         year: 2001,
//         fullName: () => {
//             console.log(this.firstName + '' + this.lastName)
//         }
//     },
//     {
//         firstName: 'hossam',
//         lastName: 'adem',
//         age: 23,
//         year: 2001,
//         fullName: () => {
//             console.log(this.firstName + '' + this.lastName)
//         }
//     }
// ]


// for (let i = 0; i < students.length - 1; i++) {
//     let peint = 
// `
// <tr>
//     <td>${students[i].firstName}</td>
//     <td>${students[i].age}</td>
//     <td>${students[i].year}</td>
// </tr>
// `
//     document.querySelector('#print').innerHTML += peint
// }

// Challenge coderHub
// function countWords(txt) {
//     let count = txt.trim().split(/\s+/)
//     return count.length
// }

// console.log(countWords('mazen ashraf ismeal'));


// Challenge coderHub
// function addFive(arr) {

//     return arr.map((ele) => {
//         return (ele + '5').toString()
//     })
    
// }
// let result = addFive(['mazen', 'ashraf', 'ismeal'])
// console.log(result)

// // Challenge coderHub
// function stringContains(firstName, contains) {
//     // write your code here
//     return firstName.includes(contains)
// }

// console.log(stringContains('mazen', 'n'));

// Challenge coderHub
// function date_format(date) {
//     // write your code here
//     let d = new Date();
//     // console.log();
    
// }
// date_format('10/2/2002')

// challenge 
// let input = document.querySelector('.send')
// let submit = document.querySelector('.submit')
// let step = document.querySelector('.step')
// let sendMessage = document.querySelector('.sendMessage')

// // First Function mouseovet in input
// input.addEventListener('mouseout', function() {
//     let createH3 = document.createElement('h3');
//     let createFullH3 = document.createTextNode(this.value)
//     createH3.appendChild(createFullH3)
//     step.appendChild(createH3)
// })

// submit.addEventListener('click', function() {
//     let value = input.value;
//     let createH3 = document.createElement('h3');
//     let createFullH3 = document.createTextNode(value)
//     createH3.appendChild(createFullH3)
//     sendMessage.appendChild(createH3)
// })

// function increasing_array(arr) {
//     // write your code here
//     let points = 0;
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] <= arr[i - 1]) {
//             let diff = arr[i - 1] - arr[i] + 1;
//             arr[i] += diff;
//             points += diff;
//         }
//     }
//     return points;
// }
// let arr = [3, 2, 1, 2, 3];
// let points = increasing_array(arr);
// console.log("Minimum points required: ", points);

// function is_same(name1, name2) {
//     // write your code here
//         let formattedName1 = name1.trim().toLowerCase();
//         let formattedName2 = name2.trim().toLowerCase();
//         if (formattedName1 === formattedName2) {
//             return 'متشابهين'
//         } else {
//             return 'غير متشابهين' 
//         }
// }
// console.log(is_same('mazen', 'mazen'))

// Destructuring Array js
// let friends = ['mazen', 'ahmed', 'ashraf', ['ismeal', 'gamal', ['seaad', 'hany']]];

// let [, , , [a, ,[, b]]] = friends

// console.log(a); // ismeal
// console.log(b); // hany

// // Destructuring Object js
// let person = {
//     'myName': 'mazen',
//     'myTitle': 'FrontEnd',
//     'skills': ['html', 'css', 'js'],
//     'myAge': 23,
//     'addresses': {
//         'one': 'egypt',
//         'two': 'KSA'
//     }
// }

// let {myName: n, myTitle: t, skills: [, , there], myAge, addresses: {one}} = person
// console.log(n)
// console.log(t)
// console.log(there)
// console.log(myAge)
// console.log(one);

// Challenge Destructuring
// let chosen = 1;

// let friends = [
//     {title: 'mazen', age: 23, available: true, skills: ['html', 'css']},
//     {title: 'Ahmed', age: 25, available: false, skills: ['html', 'css']},
//     {title: 'seaad', age: 28, available: true, skills: ['php', 'mysql']},
// ]

// New Data Type Set

let data = [1, 2, 3, 3, 3];
let uniqueData = new Set(data) // syntax Set

console.log(uniqueData.add(4)); // Add Item in Set 
console.log(uniqueData.size); // Size in Set
console.log(uniqueData.delete(4)) // Delete Item in Set
console.log(uniqueData.has(1))

// Challenge one Set
let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(2)
console.log(setOfNumbers);
console.log(setOfNumbers = 2);

// Challenge two Set

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log(new Set(myFriends.sort()))

// Challenge Map
let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
  };

let myMap = new Map();
myMap.set('username' , "Osama")
myMap.set('role' , "Admin")
myMap.set('country' , "Egypt")

console.log(myMap)
console.log(myMap.size)
console.log(myMap.has('role'))



let locations = {
  20: 'place 1',
  30: 'place 2',
  50: 'place 3',
  40: 'place 4'
}

let mainLocation = 15;

let locationArrayKeys = Object.keys(locations)
console.log(locationArrayKeys);

// convert array string to number
let locationsArray = locationArrayKeys.map(function(n) {
  return +n
})

console.log(locationsArray);

let cheek = locationsArray.every(function(e) {
  return e > this
}, mainLocation)

console.log(cheek)

//  Map And Set Challenge

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log([...n1, ...n2].length * Math.max(...n1)); // 210


// let theNumber = 100020003000;
// console.log(Array.from(theNumber))

/*________________ RegEx ______________________*/
let str = 'my name is mazen ashraf and i learn javaScript with elzero Web School Mazen'

let regex = /mazen/;

console.log(str.match(regex));

let myString = 'abcedifAFSDVGRER123456789@#%^&*';
let ids = 'com net org io'

let idsRe = /(com|io)/g;
console.log(ids.match(idsRe));
let spacile = /[0-9]/g;
console.log(myString.match(spacile))

let mails = 'one@en.com mazen@gmail.io ismeal@yhaoo.net'
let mailsRe = /\w+@\w+.(io|net)/ig;
console.log(mails.match(mailsRe))

let nums = '0110 10 150 05120 0560 350 00';
let numsRe = /0\d*0/ig;
console.log(nums.match(numsRe))

let urls = 'https://www.google.com http://website.net web.io'
let urlRe = /(https?:\/\/)?(www.)?\w+.\w+/ig;
console.log(urls.match(urlRe));

// Regular Expressions - Challenge
let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re = /(https?:\/\/)?(www.)?\w+.org(:\w+\/\w+.php\?id=\w+&\w+=\w+)?/ig; // Write Your Pattern Here

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));