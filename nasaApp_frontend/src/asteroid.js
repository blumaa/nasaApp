class Asteroid {
  constructor(asteroid) {
    this.id = asteroid.id;
    this.name = asteroid.name;
    this.url = asteroid.nasa_jpl_url;
    this.missedBy = asteroid.close_approach_data[0].miss_distance.miles
    this.hazardous = asteroid.is_potentially_hazardous_asteroid
    this.sentry = asteroid.is_sentry_object
  }

  render() {
    return (`<div class="asteroid-item" id="${this.id}">
              <h3>${this.name}</h3>

                <p>Was it potentially hazardous? ${this.hazardous}</p>
                <p>This asteroid only missed by ${this.missedBy} miles!</p>
                <p><a href="${this.url}">Click for detailed info</a></p>
                `)
  }
}

// <li>Is it a sentry? ${asteroid.sentry}</li>
