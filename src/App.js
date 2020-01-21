import React from 'react';
import Header from './components/Header';
import Message from './components/Message';
import Cart from './components/Cart';
import Footer from './components/Footer';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';

function App() {
  return (
  <div>
    <Header />
    <main id="mainContainer">
        <div className="container">
            <ProductsContainer />
            <Message />
            <CartContainer />
        </div>
    </main>
    <Footer />
  </div>
  );
}

export default App;
