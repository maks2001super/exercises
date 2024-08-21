let obj1 = {
    name :"Maks",
    surname : "Bezhentsev",
    age : 22,
    weight : 65,
    height : 173
}
//  for(let key in obj)
//  console.log(obj[key])

let obj2 = {
    job : "QA",
    __proto__ : obj1
}
// console.log(obj2)

let obj3 = {
    hobby : "Bodybuilding"
}

let obj4 = Object.assign(obj2,obj3) 
    // console.log(obj4)

let obj4json = JSON.stringify(obj4) 
// console.log(obj4json)

let obj5 = JSON.parse(obj4json)
console.log(obj5)













function phone (model,battery,memory,os,color,price){
    this.model = model
    this.battery = battery
    this.memory = memory
    this.os = os
    this.color = color 
    this.price = price
}

let iphone = new phone ('XR', '2942 mAh', 64, 'IOS', 'black', "500$")

let xiaomi = new phone ('9 note pro', "3000 mAh", 128, "android", "blue", "300$")

//  console.log(iphone.price)
//  console.log(xiaomi.price)

// if(iphone.price>xiaomi.price){
//     console.log("iphone is more expensive")
// }else{
//     console.log("xiaomi is more expensive")
// }




