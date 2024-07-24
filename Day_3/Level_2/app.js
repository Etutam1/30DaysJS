// 1.Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
function e1(){

getSide().then(b=>
  getSide().then(h=>
    calculateArea(b, h)
  )
);
}


function getSide(){
  return new Promise((resolve, reject)=>{
    try{
      resolve(prompt('Enter the side(i.e. 20.0):'))
    }catch(err){
      reject(err)
    }
  })
}



function parseNumber(number){
  return new Promise((resolve, reject)=>{
    try{
      resolve(Number(number))
    }catch(err){
      reject(err)
    }
  })
}


async function calculateArea(base, height){

  base = await parseNumber(base);
  console.log(base)
  height= await parseNumber(height);
  console.log(height)

  alert(`The area of our triangle is ${base * height /2}`)
}

// e1();
function calculatePerimeter(sides){
  return sides.reduce((p,c)=> p + c)
}

// 2.Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
async function e2(){
  sides = []
   let a= await getSide();
   sides.push(Number(a))
   let b= await getSide();
   sides.push(Number(b))
   let c= await getSide();
   sides.push(Number(c))

   alert(`The Perimeter of your triangle is ${calculatePerimeter(sides)}`)

  }
  // e2()

  // 4.Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
  