// // challenge loop wiht array in js 
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



function gravity_flip(columns) {
    // write your code here
    let n = columns.length;

    for (let i = 0; i < n - 1; i++) {
        if (columns[i] > columns[i + 1]) {
            columns[i] = columns[i + 1];
        }
    }

    for (let i = n - 1; i > 0; i--) {
        if (columns[i] < columns[i - 1]) {
            columns[i - 1] = columns[i];
        }
    }
    return columns
}
const inputCubes = [3, 1, 2, 4];
const res = gravity_flip(inputCubes);
console.log(res)

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
function countWords(txt) {
    let count = txt.trim().split(/\s+/)
    return count.length
}

console.log(countWords('mazen ashraf ismeal'));


// Challenge coderHub
function addFive(arr) {

    return arr.map((ele) => {
        return (ele + '5').toString()
    })
    
}
let result = addFive(['mazen', 'ashraf', 'ismeal'])
console.log(result)

// Challenge coderHub
function stringContains(firstName, contains) {
    // write your code here
    return firstName.includes(contains)
}

console.log(stringContains('mazen', 'n'));

// Challenge coderHub
function date_format(date) {
    // write your code here
    let d = new Date();
    console.log(d.getUTCDay());
    
}
date_format('10/2/2002')