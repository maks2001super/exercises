  function revstr(word){
      return word.split('').reverse().join('')
  }

  let word='mandarinka'
  let reverse=revstr(word)

  console.log(reverse)

 


  function ispolidrom(word){
    
     return word==word.split('').reverse().join('')
  }

  if(ispolidrom('121')){
     console.log(true)
  } else {
     console.log(false)
  }

 

 const arr = [1,2,3,4,5,6]
 const arr2 = []

 for (const number of arr) {
     if (number %2==0) {
         arr2.push(number)
     }
 }
 arr2.reverse()
 console.log(arr2)

