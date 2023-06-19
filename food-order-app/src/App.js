import { useState} from 'react'
import Cart from './components/Cart/Cart';

import Banner from './components/Layout/Banner';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';



function App() {
  const [clickedCart, setClickedCart] = useState(false)

  const showCartHandler = () => {
    setClickedCart(true)
  }

  const hideCartHandler = () => {
    setClickedCart(false)
  }

  return (
    <CartProvider>
      {clickedCart && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <Banner/>
      <Meals/>
    </CartProvider>
  );
}

export default App;
