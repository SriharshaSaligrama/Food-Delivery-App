import React from 'react'
import { Route } from 'react-router-dom'
import { AmericanFoodItems } from './Components/AmericanFoodItems';
import { CheckOut } from './Components/CheckOut';
import { ChineseFoodItems } from './Components/ChineseFoodItems';
import { HomePage } from './Components/HomePage';
import { IndianFoodItems } from './Components/IndianFoodItems';

const App = () => {
  return (
    <div>
      <Route path='/' component={HomePage} exact />
      <Route path='/Indian' component={IndianFoodItems} />
      <Route path='/American' component={AmericanFoodItems} />
      <Route path='/Chinese' component={ChineseFoodItems} />
      <Route path='/CheckOut' component={CheckOut} />
    </div>
  )
}


export default App;
