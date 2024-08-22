class car {
    constructor (mark,model){
        this.mark=mark
        this.model=model
    }
}

class characteristics extends car {
    constructor (age,body,color,run,price){
        super ("ford", "focus")
        this.age = age
        this.body = body
        this.color = color
        this.run = run
        this.price = price
    }
}

let CAR = new characteristics (15, "hatchback", "black", "132000 km", "5000$")
// console.log(CAR)



class food {
    #Ingredients = "pita"
    constructor(Ingredients){
        
    } 
    addIngredients (something){
        this.#Ingredients =   this.#Ingredients + something
    }
    setIngredients (newIngredients){
        this.#Ingredients = newIngredients
    }
    getIngredients (){
        return   this.#Ingredients
    }
    printIngredients (){
        console.log ( this.#Ingredients)
    }
}

let shaurma = new food ()
shaurma.addIngredients(", tomatoes, chesse, sous, chiken, cabbage")
shaurma.printIngredients ()
 
let burito = new food ()
burito.addIngredients (", beef, rice, sous, beans, tomatoes, oregano")
burito.printIngredients ()

