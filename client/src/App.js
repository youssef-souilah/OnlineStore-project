import {BrowserRouter,Routes,Route}from "react-router-dom";
import Index from "./views/Layout";
import "./App.css";
import Home from "./views/Home";
import ContactUs from "./views/Contact";
import NotFound from "./views/Not_Found";
import Shop from "./views/Shop";
import FilterProducts from "./views/CategoryProducts";
import ProductDetails from "./views/ProductDetails";
import Basket from "./views/Basket";
import SearchProducts from "./views/SearchProducts";
import SignIn from "./views/SignIN";
import SignUp from "./views/SignUp";
const App=()=>{
  return(
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Index/>}>
            <Route index path='/' element={<Home/>} />
            <Route index path='/sign-in' element={<SignIn/>} />
            <Route index path='/sign-up' element={<SignUp/>} />
            <Route  path='/shop' element={<Shop/>} />
            <Route  path='/shop/basket' element={<Basket/>} />
            <Route  path='/shop/products' element={<FilterProducts/>} />
            <Route  path='/shop/products/search' element={<SearchProducts/>} />
            <Route  path='/shop/products/:id' element={<ProductDetails/>} />
            <Route  path='/contact-us' element={<ContactUs/>} />
          </Route>
          <Route path="*" element={<NotFound/> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App ;