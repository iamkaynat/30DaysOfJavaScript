const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}


/*Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
Destructure and assign the elements of countries array to fin, est, sw, den, nor
Destructure the rectangle object by its properties or keys. */

const [ e , pi ,gravity, humanBodyTemp, b]= constants;
console.log(e);

const[fin, est , sw , den , nor] = countries;
console.log(fin);

const {width , height,area , perimeter} = rectangle;
console.log(width);

