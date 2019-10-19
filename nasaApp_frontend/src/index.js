document.addEventListener('DOMContentLoaded', () => {
  console.log('nasa app')
  getAsteroids()

  document.getElementById('date-select').addEventListener('click', () => {
    // console.log(event.target)
    renderAsteroidList()

    renderAsteroids()
  })
  // function repeatOften() {
  //   $("<main />").appendTo("body");
  //   requestAnimationFrame(repeatOften);
  // }
  // requestAnimationFrame(repeatOften);


  // // Variables
  // const flames = [...document.querySelectorAll('.rocket__flame')];
  // const delay = 40;
  // let now = Date.now();
  // let then = Date.now();
  // let elapsed = 0;
  //
  // // Methods
  // const randomNumber  = (min, max) => Math.random() * (max - min) + min;
  //
  // const animateFlames = () => {
  //   now = Date.now();
  //   elapsed = now - then;
  //
  //   // Every 0.04 seconds the animation will be trigger, or flames will look unnatural and weird.
  //   if (elapsed > delay) {
  //     flames.map(flame => {
  //       flame.style.transform = `scale(${randomNumber(0.8, 1)}, ${randomNumber(0.8, 1)})`;
  //     })
  //
  //     then = Date.now();
  //   }
  //
  //   requestAnimationFrame(animateFlames); // will animate next frame again by calling it self
  // }
  //
  // const createStars = () => {
  //   // Create stars on top right section of the rocket
  //   const star = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  //   const attrs = {
  //     cx: `${randomNumber(1050, 2550)}`, // ${randomNumber(-450, 1050)}
  //     cy: `${randomNumber(-450, -2550)}`, // ${randomNumber(-450, 1050)}
  //     r: `${randomNumber(5, 20)}`,
  //     fill: '#898989'
  //   };
  //
  //   for (let key in attrs) {
  //     if (attrs.hasOwnProperty(key)) {
  //       star.setAttribute(key, attrs[key]);
  //     }
  //   }
  //
  //   return star;
  // }
  //
  // const renderStarsInViewBox = () => {
  //   const rocket = document.querySelector('.rocket');
  //   const rocket_first_child = rocket.firstChild;
  //   const star_numbers = randomNumber(0, 5);
  //
  //   // Avoid too many stars
  //   if (star_numbers > 4.8) {
  //     const star = createStars();
  //
  //     rocket.insertBefore(star, rocket_first_child);
  //     customizeStarsDifferently(star);
  //   }
  //
  //   requestAnimationFrame(renderStarsInViewBox);
  // }
  //
  // const customizeStarsDifferently = (obj) => {
  //   const star_size = obj.getAttribute('r');
  //   let duration = 0;
  //
  //   if (star_size < 7) {
  //     obj.style.opacity = `${randomNumber(0.5, 0.7)}`;
  //     duration = 25000;
  //   } else if(star_size < 10) {
  //     obj.style.opacity = `${randomNumber(0.6, 0.8)}`;
  //     duration = 20000;
  //   } else if(star_size < 17) {
  //     obj.style.opacity = `${randomNumber(0.7, 0.9)}`;
  //     duration = 15000;
  //   } else {
  //     obj.style.opacity = `${randomNumber(0.8, 0.95)}`;
  //     duration = 10000;
  //   }
  //
  //   animeStars(obj, duration);
  // }
  //
  // const animeStars = (obj, seconds) => {
  //   // Move all stars from top right to left bottom
  //   anime({
  //     targets: obj,
  //     translateX: [
  //       { value: -3000, duration: seconds, easing: 'linear' }
  //     ],
  //     translateY: [
  //       { value: 3000, duration: seconds, easing: 'linear' }
  //     ],
  //     complete: () => {
  //       obj.remove(); // Remove stars after completing animation to improve performance.
  //     },
  //   });
  // }
  //
  // // Main controller
  // const handleSpaceController = () => {
  //   requestAnimationFrame(animateFlames);
  //   requestAnimationFrame(renderStarsInViewBox);
  // }
  //
  // handleSpaceController();


})
