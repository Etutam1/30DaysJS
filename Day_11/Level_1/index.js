const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}




// 1.Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.

const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = [...constants]

// 2.Destructure and assign the elements of countries array to fin, est, sw, den, nor

const [fin, est, sw, den, nor] = [...countries]

// 3.Destructure the rectangle object by its properties or keys.

const {width, height, area, perimeter} = {...rectangle} 

