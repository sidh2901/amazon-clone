import React,{useEffect} from 'react'
import './App.css';
import Header from './Header'
import Home from './Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Checkout from './Checkout'
import Login from './Login';
import { auth } from './Firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment'
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import Orders from './Orders';


const promise = loadStripe("pk_test_51IMVZRGyCTeinCFXr35X2RC7ReqXKArYlgEGHcpPGXNoXqc9B95ptoYjk5ETK52xVVXHTyfmyqlrr84B7zvJMo6Y00txJRfSHB");

function App() {

  const [{user}, dispatch] = useStateValue();
    
  useEffect(() => {
      auth.onAuthStateChanged(authUser => {
        console.log('The user iss >>>' ,authUser);

        if(authUser){
          
          dispatch({
            type: 'SET_USER',
            user: authUser
          })

        } else {
          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
      })
  }, [])

  return (
    <div className="app">
      <Router> 
        <Switch>
        <Route path="/orders">
            <Header />
            <Orders />
        </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/checkout">
            <Header />
            <Checkout />
        </Route>
        <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
             <Payment />
            </Elements>   
        </Route>
        <Route path="/">
           <Header />
           <Home />
        </Route>
        </Switch>  
  
    </Router>

    </div>
  );
}

export default App;
