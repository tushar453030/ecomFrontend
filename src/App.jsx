import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";

import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

const App = () =>{
  return (
    
    
    
    
     
      <Routes> 
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/productlist" element={<ProductList/>}/>
        <Route path="/" element={<Home/>} exact />
      </Routes>
    
    
  );
  }

export default App;