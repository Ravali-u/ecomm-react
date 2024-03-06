import React from 'react'
import './App.css'

function App() {

  let products = [
    { id: 1, name: "Product 1", price: 440, image: "./coffee1.jpg" },
    { id: 2, name: "Product 2", price: 560, image: "./coffee2.jpg" },
    { id: 3, name: "Product 3", price: 500, image: "./coffee3.jpg" },
    { id: 4, name: "Product 4", price: 100, image: "./coffee4.jpg" },
    { id: 5, name: "Product 5", price: 900, image: "./coffee5.jpg" },
    { id: 6, name: "Product 6", price: 900, image: "./coffee1.jpg"},
  ];
  return (
    <div className="App-container">
      <h1>Coffee shop</h1>
      {products.map((e) => (
        <div key={e.id}>
          <div>
            <img src={e.image} alt={e.name} width={200} height={200}/>
          </div>
          <div>{e.name}</div>
          <div>{e.price}</div>
          <div><button>Add</button></div> 
        </div>
      ))}
    </div>
  );
}

export default App;
