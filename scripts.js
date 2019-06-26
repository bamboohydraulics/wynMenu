class MenuItem {
    constructor(name, priceInCents){
      this.name = name
      this.priceInCents = priceInCents
    }
  
    get description(){
      return `${this.name} ${this.formattedPrice}`
    }
  
    get formattedPrice() {
      return (this.priceInCents/100).toLocaleString('en-US', {style: 'currency', currency: 'USD' })
    }
  }
  
  class Sandwich extends MenuItem {
    constructor(...args){
      super(...args)
      this.ingredients = []
    }
  
    addIngredients(listOfIngredients){
      this.ingredients.push( ...listOfIngredients )
    }
  }
  
  let snack = new MenuItem('fusion croqueta', 325)
  console.log( snack.description )
  let sub = new Sandwich('hipster reuben', 1345)
  console.log( sub )
  sub.addIngredients(['corned beef', 'sourkraut', 'mustard', 'organic avocado'])
  console.log( sub.description )
  
  let myObj = {
    properties: "value",
    sayHello(){ console.log("Hello there!") }
  }