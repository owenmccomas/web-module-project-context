import React, { useState, useContext } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { ProductContext } from "./Contexts/ProductContext";
import { CartContext } from "./Contexts/CartContext";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <CartContext.Provider value={cart}>
        <Navigation />

        {/* Routes */}

        <ProductContext.Provider value={{ products, addItem }}>
          <Route exact path="/">
            <Products products={products} addItem={addItem} />
          </Route>
        </ProductContext.Provider>
        <Route path="/cart">
          <ShoppingCart value={cart}/>
        </Route>
      </CartContext.Provider>
    </div>
  );
}

export default App;
