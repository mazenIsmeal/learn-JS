console.log('Hello World!');

// Learn API
// function getPosts() {
//     let request = new XMLHttpRequest();
//     request.open('GET', 'https://jsonplaceholder.typicode.com/posts'); 
//     request.responseType = 'json'
//     request.send();
//     request.onload = function() {
//         if(request.status >= 200 && request.status < 300) {
//             let posts = request.response;
//             for(post of posts) {
//                 document.querySelector('#content').innerHTML += `<h1>${post.title}</h1>`;
//             }
//         } else {
//             console.log('error')
//         }
//     }
// }
// getPosts();

// function createPost() {
//     let request = new XMLHttpRequest();
//     request.open('POST', 'https://jsonplaceholder.typicode.com/posts');
//     request.setRequestHeader('Accept', 'application/json')
//     request.setRequestHeader('content-type', 'application/json')
//     let bodyParams = `{
//         "title": "foo",
//         "body": "bar",
//         "userId": 1
//     }`
//     request.send(bodyParams)
//     request.onload = function() {
//         if(request.status >= 200 && request.status < 300) {
//             let response = request.response
//             console.log(response);
//         }else {
//             console.log('error')
//         }
//     }
// }
// createPost()

// function editPost() {
//     let request = new XMLHttpRequest();
//     request.open('PUT', 'https://jsonplaceholder.typicode.com/posts/1');
//     request.setRequestHeader('Accept', 'application/json')
//     request.setRequestHeader('content-type', 'application/json')
//     let bodyParams = `{
//         "title": "foo",
//         "body": "bar",
//         "userId": 1
//     }`
//     request.send(bodyParams)
//     request.onload = function() {
//         if(request.status >= 200 && request.status < 300) {
//             let response = request.response
//             console.log(response);
//         }else {
//             console.log('error')
//         }
//     }
// }
// editPost()

// _______________ Promises ________________

new Promise((resolve, reject) => {
    // Async Code
    setTimeout(() => {
        document.querySelector('.title1').style.visibility = 'visible';
        resolve()
    }, 1000)
}).then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            document.querySelector('.title2').style.visibility = 'visible';
            resolve()
        }, 1000)
    }).then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                document.querySelector('.title3').style.visibility = 'visible';
                resolve()
            }, 1000)
        }).then(() => {
            setTimeout(() => {
                document.querySelector('.title4').style.visibility = 'visible';
            }, 1000)
        })
    })
})