console.log('Hello World');

// Get All User
// function getUsers() {
//     let request = new XMLHttpRequest();
//     request.open('GET', 'https://jsonplaceholder.typicode.com/users');
//     request.send();
//     request.responseType = 'json'
//     request.onload = function() {
//         let results = request.response;
//         for(result of results) {
//             let items = document.querySelector('.items');
//             items.innerHTML += `
//             <div class='item' onclick='showId(${result.id})'>
//                 <h1 class="title">${result.name}</h1>
//                 <p class="email">${result.email}</p>
//             </div>
//             `
//         }
//     }
// }
// getUsers()

function users() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            if(response.ok) {
                return response.json()
            }
        })
        .then((json) => {
            for(result of json) {
                let items = document.querySelector('.items');
                items.innerHTML += `
                <div class='item' onclick='showId(${result.id})'>
                    <h1 class="title">${result.name}</h1>
                    <p class="email">${result.email}</p>
                </div>
                `
                resolve()
            }
        });
    })
}


function posts(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then((response) => response.json())
    .then((json) => {
        document.querySelector('.posts').innerHTML = ''
        for(result of json) {
            let content = `
            <div class="post">
                <div class="header">
                    <h2 class="titlePost">${result.title}</h2>
                </div>
                <div class="bodyPost">
                    <p class="text">
                        ${result.body}
                    </p>
                </div>
            </div>
            `
            document.querySelector('.posts').innerHTML += content
            
        }
    });
}

users()
.then(() => {
    posts(1)
})

// function getPosts(id) {
//     let request = new XMLHttpRequest();
//     request.open('GET', `https://jsonplaceholder.typicode.com/posts?userId=${id}`);
//     request.send();
//     request.responseType = 'json'
//     request.onload = function() {
//         let results = request.response
//         document.querySelector('.posts').innerHTML = ''
//         for (result of results) {
//             let content = `
//             <div class="post">
//                 <div class="header">
//                     <h2 class="titlePost">${result.title}</h2>
//                 </div>
//                 <div class="bodyPost">
//                     <p class="text">
//                         ${result.body}
//                     </p>
//                 </div>
//             </div>
//             `
//             document.querySelector('.posts').innerHTML += content
//         }
//     }
// }
// getPosts(1)

function showId(id) {
    posts(id)

}