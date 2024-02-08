import React, { useState } from 'react'
// import { useState } from 'react'
import image1 from '../asses/thinksofrock/not-found/600px-Electric_bass_anatomy-removebg-preview.png'
import image2 from  '../asses/thinksofrock/not-found/640px-Guitar_picks-KayEss-1-removebg-preview.png'
import image3 from  '../asses/thinksofrock/not-found/amplificador-orange-de-bajo-d-crush-bass-50-the-music-site-3-removebg-preview.png'
import image4 from  '../asses/thinksofrock/not-found/bajo-electrico-yamaha-trbx174-bl-pasivo-4-cuerdas-removebg-preview.png'
import image5 from  '../asses/thinksofrock/not-found/descarga-removebg-preview.png'
import image6 from  '../asses/thinksofrock/not-found/descarga__1_-removebg-preview.png'
import image7 from  '../asses/thinksofrock/not-found/greko-kg19-bk-guitarra-electrica-removebg-preview.png'
import image8 from  '../asses/thinksofrock/not-found/guitarra-esp-ref-arrow-black-metal-2-removebg-preview.png'
import image9 from  '../asses/thinksofrock/not-found/images-removebg-preview.png'
import image10 from '../asses/thinksofrock/not-found/images__1_-removebg-preview.png'





function ThinksOfMusic({setCarBuy ,visibilityWomens, visibilityMens}) {
    // clothes of men

const ThinksOfMusic = [
    { name: "Electric Guitar", description: "Guitar Coffee Color", image: image1 , price: 80 },
    { name: "Guitar Nib Multiple Style", description: "Big O Little Guitar Nib", image: image2, price: 1 },
    { name: "Orange Amplifier", description: "Amplifier With Orange Color", image: image3, price: 35},
   
    { name: "Black Electric Bass", description: "Electric Bass With Black Color", image: image4, price: 60},
    { name: "Black Amplifier", description: "Amplifier with Black Color", image: image5, price: 35},
    { name: "Black Amplifier 2", description: "Black Amplifier Rock", image: image6, price: 35},
    { name: "Electric Black Guitar", description: "Electric Black Guitar", image: image7, price: 70},
    { name: "Electric MetalHead Guitar", description: "Electric Guitar Metal Style", image: image8, price: 120},
    { name: "Guitar Nib Black", description: "Big Guitar Nib", image: image10, price: 1},
    { name: "Green Batery", description: "Batery With Green Color", image: image9, price: 150},
  
  ]
  
  
  // Clothes of women
  
  
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
  
   
  
  const addToCar = (price, product) => {
  setCarBuy(
  prevState => [...prevState,
  {value: price, name: product }] )
  }
  
  
  return (
    
  <div>
  {
  (visibilityMens || visibilityWomens) && mapFunction(ThinksOfMusic)
  }
  </div>
  
  )
  }
export default ThinksOfMusic