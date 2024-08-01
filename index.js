// challenge loop wiht array in js 
// step 2
let submitLoop = document.querySelector('.submit');
let arrStueaudent = ['mazen', 'ahmed', 'ali', 'hassen', 'ashraf', 'ismeal'];
let arr = document.querySelector('.arr');
let res = document.querySelector('.res');

// step 3
for (let i = 0; i < arrStueaudent.length; i++) {
    arr.innerHTML += arrStueaudent[i] + '-';
}

// step 4
submitLoop.addEventListener('click', () => {
    let inputLoop = document.querySelector('.input-loop').value.toLowerCase();
    // for (let student of arrStueaudent) {
    //     let loweredCase = student.toLowerCase();
    //     if (inputLoop == loweredCase) {
    //         res.innerHTML = `${inputLoop} is in school`;
    //         break;
    //     }
    //         res.innerHTML = `${inputLoop} is Not in school`;
    // }
    // while
    let student = 0;
    while(student < arrStueaudent.length - 1) {
        student++;
        let loweredCase = arrStueaudent[student].toLowerCase();
        if (inputLoop == loweredCase) {
            res.innerHTML = `${inputLoop} is in school`;
            break;
        }
            res.innerHTML = `${inputLoop} is Not in school`;
    }
})

// array 2D
let classes = [
    ['mazen', 'ashraf', 'hassen'],
    ['ahmed', 'ail', 'ismeal'],
    ['smahe', 'selam']
];

for (let i = 0; i < classes.length; i++) {

    let cureentClass = classes[i]
    document.querySelector('#class').innerHTML += `<br> class ${i + 1}`
    for (let j = 0; j < cureentClass.length; j++) {
        let st = cureentClass[j]
        document.querySelector('#class').innerHTML += ` ${st} -- `
    }
}

// let numbars = [1,2,3,4,5,6,7,8,9,10];
// let num = document.querySelector('.num')

// for (let i = 0; i < numbars.length; i++) {

//     let cureentNumbars = numbars[i]
//     num.innerHTML += `<br> ${numbars[i]} X`;

//     for (let a = 0; a < cureentNumbars.length; a++) {
//         console.log(cureentNumbars[a]);
//     }
// }

for(let i = 1; i <= 10; i++) {
    for(let j = 1; j <= 10; j++) {
        document.querySelector('.num').innerHTML += `<br> ${i} X ${j} = ${i * j}`;
    }
}