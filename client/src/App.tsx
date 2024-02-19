

import { Route, Routes } from "react-router";
import { All } from "./pages/Main";
import { Account } from "./pages/Account";
import { Register } from "./pages/Register";
import { Cart } from "./pages/Cart";
import {Favorite } from "./pages/Favorite";

function App() {


  return (
    <>
    <Routes>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/profile" element={<Account/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/favorite" element={<Favorite />}/>
      <Route path="/" element={<All/>}/>  
    </Routes>
    </>
  )
}

export default App
