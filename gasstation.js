 let x = "XL && disel"

 switch(x){
     case "S && gas":
         console.log("заправка для S авто, тип палива gas")
         break
     case "S && disel":
         console.log("заправка для S авто, тип палива disel")
         break
     case "M && disel":
         console.log("заправка для M авто, тип палива disel")
         break
      case "M && gas":
             console.log("заправка для M авто, тип палива gas")
             break
     case "L && disel":
         console.log("заправка для L авто, тип палива disel")
         break
      case "L && gas":
             console.log("заправка для L авто, тип палива gas")
             break
      case "XL && disel":
                 console.log("заправка для XL авто, тип палива disel")
                 break
      case "XL && gas":
                 console.log("заправка для XL авто, тип палива gas")
                 break
 }

function variant(a,b){
    if(a=="S",b=='gas'){
        return `заправка для S авто, тип палива gas`
    }else if (a=='S',b=='disel'){
        return `заправка для S авто, тип палива disel`
    }else if (a=='M',b=='gas'){
        return `заправка для M авто, тип палива gas`
    }else if (a=='M',b=='disel'){
        return `заправка для M авто, тип палива disel`   
    }else if (a=='L',b=='gas'){
        return `заправка для L авто, тип палива gas`
    }else if (a=='L',b=='disel'){
        return `заправка для L авто, тип палива disel`
    }else if (a=='XL',b=='gas'){
        return `заправка для XL авто, тип палива gas`
    }else if (a=='XL',b=='disel'){
        return `заправка для XL авто, тип палива disel`
}else {
    return `error`
}
}
console.log(variant(`M`, `gas` ))
console.log(variant(`S`, `disel` ))
console.log(variant(`M`, `disel` ))