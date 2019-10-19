let startDate = ''
let endDate = '2019-10-18'
// console.log(date)
let URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${startDate}&api_key=Imx2vYrm3vfWkUvWGKQw6gFg5ZWgJbetcdo3AJad`

let allAsteroids = []
let asteroidObjects = []
let asteroidDataState = {}
const asteroidList = document.getElementById('date-select')
const asteroidShow = document.getElementById('show-panel')

// date select

function getAsteroids(){

  fetch(URL)
    .then(resp => resp.json())
    .then(asteroidData => {
      asteroidDataState = {...asteroidData.near_earth_objects}
      asteroidList.innerHTML = ""
      // allAsteroids = asteroidData
      // console.log('all asteroids', allAsteroids)
      asteroidList.innerHTML = handleAsteroidDays(asteroidDataState)

    })
}

// render daylist

function handleAsteroidDays(asteroidDataState) {
  console.log('asteroid data state', asteroidDataState)
  console.log(Array.from(asteroidDataState))
  const newAsteroids = asteroidDataState.forEach(asteroid => {
    console.log(asteroid)
  })
  // const dayKeys = Object.keys(asteroidData.near_earth_objects)
  // return dayKeys.map(renderDay).join('')
  // console.log(Object.keys(asteroidData.near_earth_objects))
}

function renderDay(day) {
  // console.log(day)
 return (`
      <li id="${day}">${day}</li>
   `)
}

function renderAsteroidList(event) {
  console.log('all days', asteroidDataState)
  console.log('day from menu', event.target.id)
  asteroidDataState.forEach(day => {
    console.log(day)
  })

}

function handleAsteroids(data) {
  const objects = Object.values(data.near_earth_objects)
  // return data.near_earth_objects.map(dates => {
  return objects[0].map(renderAsteroidList).join('')
  // })
}

// function renderAsteroidList(asteroid) {
//   return (`<div class="asteroid-item" id="${asteroid.id}">${asteroid.name}</div>`)
// }

// create asteroid object
function handleAsteroid(event) {
  const asteroids = Object.values(allAsteroids.near_earth_objects)
  // console.log('event target id', event.target.id)
  const asteroid = asteroids[0].find(asteroid => {
    // console.log('asteroid id', asteroid.id)
    return asteroid.id === event.target.id
  })
  // console.log(asteroid)
  renderAsteroid(asteroid)
}

function renderAsteroid(asteroid) {
  const closeApproach = asteroid.close_approach_data[0].miss_distance.miles
  console.log(closeApproach)
  // console.log('asteroid data', asteroid.close_approach_data[0])
  asteroidShow.innerHTML = ""
  // console.log(asteroidShow)
  const newAsteroid = new Asteroid(asteroid)
  const renderedNewAsteroid = newAsteroid.render()
  // console.log(newAsteroid)
  asteroidShow.innerHTML = renderedNewAsteroid
}
//
//
// {
//   links: {
//     self: "http://www.neowsapp.com/rest/v1/neo/3878597?api_key=Imx2vYrm3vfWkUvWGKQw6gFg5ZWgJbetcdo3AJad"
//     },
//   id: "3878597",
//   neo_reference_id: "3878597",
//   name: "(2019 TQ3)",
//   nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3878597",
//   absolute_magnitude_h: 26.012,
//   estimated_diameter: {
//     kilometers: {
//     estimated_diameter_min: 0.0166784227,
//     estimated_diameter_max: 0.0372940869,
//     },
//     meters: {
//     estimated_diameter_min: 16.6784227059,
//     estimated_diameter_max: 37.2940869279,
//     },
//     miles: {
//     estimated_diameter_min: 0.0103634882,
//     estimated_diameter_max: 0.0231734641,
//     },
//     feet: {
//     estimated_diameter_min: 54.7192363504,
//     estimated_diameter_max: 122.3559321564,
//     },
//   },
//   is_potentially_hazardous_asteroid: false,
//   close_approach_data: [
//     {
//       close_approach_date: "2019-10-13",
//       close_approach_date_full: "2019-Oct-13 00:41",
//       epoch_date_close_approach: 1570927260000,
//       relative_velocity: {
//         kilometers_per_second: "18.202594094",
//         kilometers_per_hour: "65529.338738481",
//         miles_per_hour: "40717.3827289189",
//       },
//       miss_distance: {
//         astronomical: "0.0265483558",
//         lunar: "10.3273104062",
//         kilometers: "3971577.479682146",
//         miles: "2467823.8113637748",
//       },
//       orbiting_body: "Earth",
//     }
//   ],
//   is_sentry_object: false,
// }
