import React from 'react'
import { useState } from 'react'

// man img

import image1 from '../asses/tshirtss/Men/not-found/camiseta1-removebg-preview.png'
import image2 from  '../asses/tshirtss/Men/not-found/camiseta2-removebg-preview.png'
import image3 from  '../asses/tshirtss/Men/not-found/camiseta3-removebg-preview.png'
import image4 from  '../asses/tshirtss/Men/not-found/camiseta4-removebg-preview.png'
import image5 from  '../asses/tshirtss/Men/not-found/camiseta5-removebg-preview.png'
import image6 from  '../asses/tshirtss/Men/not-found/camiseta6-removebg-preview.png'
import image7 from  '../asses/tshirtss/Men/not-found/camiseta7-removebg-preview.png'
import image8 from  '../asses/tshirtss/Men/not-found/camiseta8-removebg-preview.png'
import image9 from  '../asses/tshirtss/Men/not-found/camiseta9-removebg-preview.png'
import image10 from '../asses/tshirtss/Men/not-found/camiseta10-removebg-preview.png'

//women img 

import image11 from '../asses/tshirtss/Women/not-found/camiseta1-removebg-preview.png'
import image12 from  '../asses/tshirtss/Women/not-found/camiseta2-removebg-preview.png'
import image13 from  '../asses/tshirtss/Women/not-found/camiseta3-removebg-preview.png'
import image14 from  '../asses/tshirtss/Women/not-found/camiseta4-removebg-preview.png'
import image15 from  '../asses/tshirtss/Women/not-found/camiseta5-removebg-preview.png'
import image16 from  '../asses/tshirtss/Women/not-found/camiseta6-removebg-preview.png'

import image17 from  '../asses/tshirtss/Women/not-found/camiseta7-removebg-preview.png'
import image18 from  '../asses/tshirtss/Women/not-found/camiseta8-removebg-preview.png'
import image19 from '../asses/tshirtss/Women/not-found/camiseta9-removebg-preview.png'
import image20 from '../asses/tshirtss/Women/not-found/camiseta10-removebg-preview.png'




function Tshirts({visibilityWomens, visibilityMens, setCarBuy}) {

// clothes of men

    const tshirtsOfMen = [
        { name: "Exodus", description: "Thrash Metal Band", image: image1 , price: 20 },
        { name: "Exodus 2", description: "Thrash Metal Band", image: image2, price: 15 },
        { name: "Total Chaos", description: "Punk Band USA", image: image3, price: 20},
       
        { name: "The Exploited", description: "Punk Band UK", image: image4, price: 18},
        { name: "Ratos De Porao", description: "Thrash Metal Band", image: image5, price: 18},
        { name: "Ratos De Porao 2", description: "Thrash Metal Band", image: image6, price: 18},
        { name: "Bahemoth", description: "Black Metal Band", image: image7, price: 20},
        { name: "Bahemoth 2", description: "Black Metal Band", image: image8, price: 25},
        { name: "Venom", description: "Metal Band", image: image9, price: 25},
        { name: "Sid Vicious", description: "Punk Vocalist", image: image10, price: 25},
      
      ]
      
      
      // Clothes of women
      
      
      const tshirtsOfWomen = [
        {name: "Motorhead", description: "Heavy Metal Band", image: image11, price: 18 },
        {name: "AC/DC", description: "Rock And Roll", image: image12, price: 18 },
        {name: "KISS", description: "Rock And Roll", image: image13, price: 20},
        {name: "Led Zeppelin", description: "Rock And Roll", image: image14, price: 18},
        {name: "Dying Fetus", description: "Brutal Death Metal", image: image15, price: 22},
        {name: "Women Demon", description: "Bad Women", image: image16, price: 22},
        {name: "Slayer", description: "Thrash Metal", image: image17, price: 15},
        {name: "Metallica", description: "Heavy Metal", image: image18, price: 25},
        {name: "Megadeth", description: "Thrash Metal", image: image19, price: 18},
        {name: "Anthrax", description: "Thrash Metal", image: image20, price: 25},
      ]
      const mapFunction = (arrayObjetos) => {
        return (
          <div className="shoe-grid">
            {arrayObjetos.map((obj, i) => (
              <div key={i} className="shoe-item">
                <h2>{obj.name}</h2>
                <p>{obj.description}</p>
                <img src={obj.image} alt={obj.name} className="shoe-image" />
                <h2>${obj.price}</h2>
                <button onClick={() => addToCar(obj.price, obj.name)} className="buy-button">Buy</button>
              </div>
            ))}
          </div>
        );
      };
      
      const ifFunction = () => {
        if(visibilityWomens){
          return mapFunction(tshirtsOfWomen)
        }
        else if(visibilityMens){
          return mapFunction(tshirtsOfMen)
        }
      }
       
    
const addToCar = (price, product) => {
    setCarBuy(
    prevState => [...prevState,
     {value: price, name: product }] )
   }
   
    
      return (
        
    <div>
    {
      (visibilityMens || visibilityWomens) && ifFunction()
    }
  </div>
      )
}

export default Tshirts