import React, { useEffect, useState } from 'react';

function CarToBuy({ carBuy }) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const totalPrice = carBuy.reduce((total, product) => {
      // Asegúrate de que el precio sea un número válido
      const productPrice = parseFloat(product.price);
      if (!isNaN(productPrice)) {
        console.log(`Precio del producto '${product.name}': ${productPrice}`);
        return total + productPrice;
      } else {
        console.error(`El precio del producto '${product.name}' no es un número válido.`);
        return total; // Si el precio no es válido, no lo sumes al total
      }
    }, 0);
            setTotalPrice(totalPrice);
  }, [carBuy]);

  return (
    <div className='car-buy-container'>
      <h1>Carbuy</h1>
      {
        carBuy.map((buy, index) => {
          return (
            <div key={index}>
              <h2>name product: {buy.name} price product: {buy.price}</h2>
            </div>
          );
        })
      }
      <h2>Total Price: ${totalPrice}</h2>
    </div>
  );
}

export default CarToBuy;