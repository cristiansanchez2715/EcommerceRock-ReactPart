import React, { useState, useEffect } from 'react';
import image1 from '../asses/shoes/women/not-found/bota1-removebg-preview.png'
import image2 from '../asses/shoes/women/not-found/bota2-removebg-preview.png'
import image3 from '../asses/shoes/women/not-found/bota3-removebg-preview.png'
import image4 from '../asses/shoes/women/not-found/bota4-removebg-preview.png'
import image5 from '../asses/shoes/women/not-found/bota5-removebg-preview.png'
import image6 from '../asses/shoes/women/not-found/bota6-removebg-preview.png'
import image7 from '../asses/shoes/women/not-found/bota8-removebg-preview.png'
import image8 from '../asses/shoes/women/not-found/bota9-removebg-preview.png'
import image9 from '../asses/shoes/women/not-found/bota10-removebg-preview.png'
import image10 from '../asses/shoes/men/not-found/bota1-removebg-preview.png'
import image11 from '../asses/shoes/men/not-found/bota2-removebg-preview.png'
import image12 from '../asses/shoes/men/not-found/bota3-removebg-preview.png'
import image13 from '../asses/shoes/men/not-found/bota4-removebg-preview.png'
import image14 from '../asses/shoes/men/not-found/bota5-removebg-preview.png'
import image15 from '../asses/shoes/men/not-found/bota6-removebg-preview.png'
import image16 from '../asses/shoes/men/not-found/bota7-removebg-preview.png'

import image18 from '../asses/shoes/men/not-found/bota9-removebg-preview.png'
import image19 from '../asses/shoes/men/not-found/bota10-removebg-preview.png'

function Shoes({carBuy, setCarBuy, visibilityWomens, visibilityMens }) {

// Clothes of womens
const shoesOfWomen = [
  { name: "High Platform Boot", description: "high platform steel toe boot", image: image1 , price: 20 },
  { name: "White Boot", description: "little boot with white color", image: image2, price: 15 },
  { name: "Black Both", description: "Big Bots Black Color", image: image3, price: 20},
 
  { name: "Closing Boot Black", description: "Closing Boot With Black Color", image: image4, price: 18},
  { name: "Closing Boot Red", description: "Closing Boot WIth Red Color", image: image5, price: 18},
  { name: "Closing Boot Purple", description: "Closing Boot With Purple Color", image: image6, price: 18},
  { name: "Heeled Boot Black", description: "Big Bots With Heeled Color Black", image: image7, price: 20},
  { name: "Gray Furry Boot", description: "Gray Furry Boot", image: image8, price: 25},
  { name: "Heeled Elegant Boot", description: "Big and Elegant Boot With Heeled Color Black", image: image9, price: 25},
]


// Clothes of men


const shoesOfMen = [
  {name: "Big Black Boot Model 1", description: "Big Boot Black", image: image10, price: 18 },
  {name: "Big Black Boot Model 2", description: "Big Boot Black", image: image11, price: 18 },
  {name: "Little Black Both", description: "Little Bots Black Color", image: image12, price: 20},
  {name: "Big Black Boot Model 3", description: "Big Boot Black", image: image13, price: 18},
  {name: "Little Black Boot Platform", description: "Platform Both", image: image14, price: 22},
  {name: "Little Black Boot Platform Model 2", description: "Platform Both", image: image15, price: 22},
  {name: "Shoes with Skull", description: "Beauty Shoes", image: image16, price: 15},
  // {name: "Boot With Skull", description: "Big Bots With Heeled Color Black", image: image17, price: 25},
  {name: "Big Black Boot Model 4", description: "Big Boot Black", image: image18, price: 18},
  {name: "Green Bots", description: "Big and Elegant Boot With Heeled Color Green", image: image19, price: 25},
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
    return mapFunction(shoesOfWomen)
  }
  else if(visibilityMens){
    return mapFunction(shoesOfMen)
  }
}


const addToCar = (price, product) => {
  console.log('Precio:', price);
  // Convierte el precio a un número antes de agregarlo al carrito
  const numericPrice = parseFloat(price);
  if (!isNaN(numericPrice)) {
    setCarBuy(prevState => [...prevState, { price: numericPrice, name: product }]);
  } else {
    console.error(`El precio del producto '${product}' no es un número válido.`);
  }
}

  return (
    <div>
      {
        (visibilityMens || visibilityWomens) && ifFunction()
      }
    </div>
  );
}

export default Shoes;


// const urlMen = "http://localhost:4000/shoesMen";
// const urlWomen = "http://localhost:4000/shoesWomen";

// const [dataMen, setDataMen] = useState([]);
// const [dataWomen, setDataWomen] = useState([]);


// const functionFetch = async (url, setData) => {
//   try {
//     const response = await fetch(url);
//     const datos = await response.json();
//     setData(datos);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };

// useEffect(() => {
//   if (visibilityMens) {
//     functionFetch(urlMen, setDataMen);
//   }
//   if (visibilityWomens) {
//     functionFetch(urlWomen, setDataWomen);
//   }
// }, [visibilityMens, visibilityWomens,]);
