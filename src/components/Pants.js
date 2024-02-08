import React from 'react'
import { useState } from 'react'

// man img

import image1 from '../asses/pants/Men/not-found/pantalon1-removebg-preview.png'
import image2 from  '../asses/pants/Men/not-found/pantalon2-removebg-preview.png'
import image3 from  '../asses/pants/Men/not-found/pantalon3-removebg-preview.png'
import image4 from  '../asses/pants/Men/not-found/pantalon4-removebg-preview.png'
import image5 from  '../asses/pants/Men/not-found/pantalon5-removebg-preview.png'
import image6 from  '../asses/pants/Men/not-found/pantalon6-removebg-preview.png'
import image7 from  '../asses/pants/Men/not-found/pantalon7-removebg-preview.png'
import image8 from  '../asses/pants/Men/not-found/pantalon8-removebg-preview.png'
import image9 from  '../asses/pants/Men/not-found/pantalon9-removebg-preview.png'
import image10 from  '../asses/pants/Men/not-found/pantalon10-removebg-preview.png'

//women img 

import image11 from '../asses/pants/Women/not-found/pantalon1-removebg-preview.png'
import image12 from  '../asses/pants/Women/not-found/pantalon2-removebg-preview.png'
import image13 from  '../asses/pants/Women/not-found/pantalon3-removebg-preview.png'
import image14 from  '../asses/pants/Women/not-found/pantalon4-removebg-preview.png'
import image15 from  '../asses/pants/Women/not-found/pantalon5-removebg-preview.png'
import image16 from  '../asses/pants/Women/not-found/pantalon6-removebg-preview.png'

import image17 from  '../asses/pants/Women/not-found/pantalon7-removebg-preview.png'
import image18 from  '../asses/pants/Women/not-found/pantalon8-removebg-preview.png'
import image19 from '../asses/pants/Women/not-found/pantalon9-removebg-preview.png'
import image20 from  '../asses/pants/Women/not-found/pantalon10-removebg-preview.png'




function Pants({setCarBuy ,visibilityWomens, visibilityMens}) {
    
// clothes of men

const pantsOfMen = [
    { name: "Pants With Stitching", description: "pants with stitching black", image: image1 , price: 20 },
    { name: "Pants With Little Belt", description: "Beauty Pants", image: image2, price: 15 },
    { name: "Casual Black Pants", description: "Black Pants", image: image3, price: 20},
   
    { name: "Pants With Fanny Pack", description: "Curious and greath Pants", image: image4, price: 18},
    { name: "Pants With Fanny Pack 2", description: "Curious and greath Pants", image: image5, price: 18},
    { name: "Blue Pants", description: "Blue Jean", image: image6, price: 18},
    { name: "Blue Jean With Brocken in Kness", description: "Blue Jean", image: image7, price: 20},
    { name: "Blue Jean With Multiple Brocken", description: "Blue Jean", image: image8, price: 25},
    { name: "Black Jean Curious Design", description: "Black Jean", image: image9, price: 25},
    { name: "Ripped Jean", description: "Blue Jean", image: image10, price: 25},
  
  ]
  
  
  // Clothes of women
  
  
  const pantsOfWomen = [
    {name: "Punk Pants", description: "Punk Style Pants", image: image11, price: 18 },
    {name: "Black Pant Military Style", description: "Military Style", image: image12, price: 18 },
    {name: "Pant With Buttons", description: "Black Pants", image: image13, price: 20},
    {name: "Pants English Style", description: "Blue Jean", image: image14, price: 18},
    {name: "Normal Blue Jean", description: "Blue Jean", image: image15, price: 22},
    {name: "Jean With Broken", description: "Blue Jean", image: image16, price: 22},
    {name: "Casual jean", description: "Blue Jean", image: image17, price: 15},
    {name: "Punk Red Style", description: "Punk Style Pants", image: image18, price: 25},
    {name: "Black Pants", description: "Metal Style", image: image19, price: 18},
    {name: "Shores With Buttons", description: "Short Pants", image: image20, price: 15},
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
      return mapFunction(pantsOfWomen)
    }
    else if(visibilityMens){
      return mapFunction(pantsOfMen)
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

      
export default Pants