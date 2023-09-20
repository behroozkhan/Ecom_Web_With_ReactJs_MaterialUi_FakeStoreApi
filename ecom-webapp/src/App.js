import { useEffect, useState } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import CartContext from './context/Cart';

function App() {

  const [cart,setCart] = useState([])
  useEffect(()=>{
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartData)
  },[])
  
  return (
    <div className="App">
      <CartContext.Provider value={{cart,setCart}}>

      <AppRouter/>
      </CartContext.Provider>
    
    </div>
  );
}

export default App;
