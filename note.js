// let x=8
// x>5 ? console.log("yes") : console.log("no")


// let man=6
// console.log(man)
// man+=4
// console.log(man)
// man*=5
// console.log(man)


// let square=function(num){
//     return num*num
// }

// console.log(square(5))

// console.log(square(10))
// console.log(square(56))

// let x=25362
// let y=34674
// let res= x>y ? (x-y) : (y-x)
//  console.log("більше значення більше на " + res)


// let square = function(num){
//     return num*num
// }


// let suma = function(numb){
//     return numb + square(5)
// }

// console.log(suma(5))


//  for(let a=0; a<10; a+=1){
//       console.log(a+5)
//   }


// function multiply(a,b){
//     var a=3
//     var b =4
//     return a*b
    
// }

// console.log(multiply())


// let mas= [3,4,5,7,9]
// let mas2= mas.map(function(nu){
// return nu*2
// })
// console.log(mas2)


//   function multiply(a,b,c){
//       function showtext(text){
//         console.log(text)
//     }      let mult= a*b*c
//       showtext("добуток цих значень "+mult)
//   }
 
//   multiply(2,5,7)

// function add(a,b){
//     function showtext(){
//     console.log(`sum of %d+%d=%d`, a,b,sum)
//     }
// let sum= a+b
// showtext()
// }
// add(6,8)

function myfunk(){
    let bin=10
    bri=function(){
        return ++bin
    }
    return bri
}
fun= myfunk()
console.log(fun())
console.log(fun())
console.log(fun())