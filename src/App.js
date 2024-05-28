import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import OrderSummaryPage from './pages/OrderSummaryPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:id" component={ProductPage} />
          <Route exact path="/cart" component={ShoppingCartPage} />
          <Route exact path="/order-summary" component={OrderSummaryPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
