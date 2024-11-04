console.log('Hello World!');

// Get All Data With Date Time
function getDataForDate() {
    let date = `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`
    
    axios.get(`https://api.aladhan.com/v1/timings/${date}`, {
        params: {latitude: 51.75865125, longitude: 1.25387785}
    }).then(function(response) {
        document.querySelector('.mainBox').innerHTML = ''
        let data = response.data.data.timings // Path Data
        document.querySelector('.date').innerHTML = `${response.data.data.date.hijri.weekday.ar} ${response.data.data.date.readable}`
        // Filter main Data
        let keys = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha',]
        const mainData = Object.fromEntries(
            Object.entries(data).filter(([key]) => keys.includes(key))
          );
        for(let item in mainData) {
            let content = `
            <div class="box">
                <h2>${item}</h2>
                <div class="time">
                    <span>${data[item]}</span>
                </div>
            </div>
            `
            document.querySelector('.mainBox').innerHTML += content
        }
    })
}
getDataForDate()

function convertCity(value, cityName) {
    let date = `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`
    document.querySelector('.title').innerHTML = cityName
    axios.get(`https://api.aladhan.com/v1/timingsByCity/${date}`, {
        params: {city: `${value}`, country: 'GB'}
    }).then(function(response) {
        document.querySelector('.mainBox').innerHTML = ''
        let data = response.data.data.timings // Path Data
        // Filter main Data
        let keys = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha',]
        const mainData = Object.fromEntries(
            Object.entries(data).filter(([key]) => keys.includes(key))
          );
        for(let item in mainData) {
            let content = `
            <div class="box">
                <h2>${item}</h2>
                <div class="time">
                    <span>${data[item]}</span>
                </div>
            </div>
            `
            document.querySelector('.mainBox').innerHTML += content
        }
    })
}