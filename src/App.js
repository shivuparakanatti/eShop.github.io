import './App.css';
import React from 'react';
import NavBar from '../src/components/Navbar.jsx'
import ItemContainer from './components/ItemsContainer';
import ItemDetails from './components/ItemDetails';
import { Route ,Routes,Link} from 'react-router-dom';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import { useSelector } from 'react-redux';
import Cart from './components/Cart';


function App() {

  const user = useSelector((state)=>{
    
   const userDetails = state.register
  
   localStorage.setItem('reduxuser',JSON.stringify(userDetails))
   return userDetails
  })

  
  return (
    <div>

      <NavBar/>
      

      <Routes>
      <Route path="/" Component={ItemContainer} exact={true}/>
      <Route path="/:id" Component={ItemDetails} exact={true} />
      <Route path='/About' Component={About} exact={true}/>
      <Route  path='/Products' Component={Products} exact={true}/>
      <Route path='/products/:id' Component={ItemDetails}/>
      <Route path='/Contact' Component={Contact} />
      <Route path='/login' Component={Login} />
      <Route path='/Register' Component={Register} />
      <Route path='/Cart' Component={Cart} />
      </Routes>
    </div>
   
    
  );
}

export default App;
