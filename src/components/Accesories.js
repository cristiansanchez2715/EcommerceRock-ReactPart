import React from 'react'
import { useState } from 'react'

// man img

import image1 from '../asses/accesories/Men/not-found/Accesorio1-removebg-preview.png'
import image2 from  '../asses/accesories/Men/not-found/Accesorio2-removebg-preview.png'
import image3 from  '../asses/accesories/Men/not-found/accesorio3-removebg-preview.png'
import image4 from  '../asses/accesories/Men/not-found/accesorio4-removebg-preview.png'
import image5 from  '../asses/accesories/Men/not-found/accesorio5-removebg-preview.png'
import image6 from  '../asses/accesories/Men/not-found/accesorio6-removebg-preview.png'
import image7 from  '../asses/accesories/Men/not-found/accesorio7-removebg-preview.png'
import image8 from  '../asses/accesories/Men/not-found/accesorio8-removebg-preview.png'
import image9 from  '../asses/accesories/Men/not-found/accesorio9-removebg-preview.png'
import image10 from  '../asses/accesories/Men/not-found/accesorio10-removebg-preview.png'

//women img 

import image11 from '../asses/accesories/Women/not-found/accesorio1-removebg-preview.png'
import image12 from  '../asses/accesories/Women/not-found/accesorio2-removebg-preview.png'
import image13 from  '../asses/accesories/Women/not-found/accesorio3-removebg-preview.png'
import image14 from  '../asses/accesories/Women/not-found/accesorio4-removebg-preview.png'
import image15 from  '../asses/accesories/Women/not-found/accesorio5-removebg-preview.png'
import image16 from  '../asses/accesories/Women/not-found/accesorio6-removebg-preview.png'

import image17 from  '../asses/accesories/Women/not-found/accesorio7-removebg-preview.png'
import image18 from  '../asses/accesories/Women/not-found/accesorio8-removebg-preview.png'
import image19 from '../asses/accesories/Women/not-found/accesorio9-removebg-preview.png'
import image20 from  '../asses/accesories/Women/not-found/accesorio10-removebg-preview.png'





function Accesories({setCarBuy, visibilityWomens, visibilityMens}) {
// clothes of men

const accesoriesOfMen = [
  { name: "Leather Jacket", description: "Black Jacket", image: image1 , price: 20 },
  { name: "Punk Jacket", description: "Jacket With Punk Style", image: image2, price: 15 },
  { name: "Skull Braceleth", description: "Braceleth With Skulls", image: image3, price: 20},
 
  { name: "Braceleth With Studs", description: "Studs Braceleth", image: image4, price: 18},
  { name: "Chain Bracelet", description: "Braceleth With Form Of Chain", image: image5, price: 18},
  { name: "Beld With Bullets", description: "Bullets in A Beld", image: image6, price: 18},
  { name: "Beld With Studs", description: "Beld with Studs", image: image7, price: 20},
  { name: "Beld With Bullets 2", description: "Beld with Bullets", image: image8, price: 25},
  { name: "Pentagram Necklace", description: "Necklace with Pentagram", image: image9, price: 25},
  { name: "Guns And Rose Necklace", description: "Necklace with Guns And Rose Logo", image: image10, price: 25},

]


// Clothes of women


const accesoriesOfWomen = [
  {name: "Metal Jacket", description: "Jacket Metal Style", image: image11, price: 18 },
  {name: "Jacket With Stuns", description: "Jacket With Much Stuns", image: image12, price: 18 },
  {name: "Jacket With Stuns 2", description: "Jacket With Much Stuns", image: image13, price: 20},
  {name: "Special Braceleth", description: "Little Usual Bracellete", image: image14, price: 18},
  {name: "Leather Braceleth", description: "Braceleth of Leather", image: image15, price: 22},
  {name: "Stars Beld", description: "Beld With Stars", image: image16, price: 22},
  {name: "Beld With Stuns ", description: "Beld With Stuns Round", image: image17, price: 15},
  {name: "Rock Necklace", description: "Necklace With Sign Of Rock", image: image18, price: 25},
  {name: "Guitar Necklace", description: "Necklace of Electric Guitar", image: image19, price: 18},
  {name: "Sunglacce", description: "Glasses of Sun", image: image20, price: 15},
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
    return mapFunction(accesoriesOfWomen)
  }
  else if(visibilityMens){
    return mapFunction(accesoriesOfMen)
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
export default Accesories