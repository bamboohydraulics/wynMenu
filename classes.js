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
  