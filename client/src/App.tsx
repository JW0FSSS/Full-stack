

import { Route, Routes } from "react-router";
import { All } from "./pages/Main";
import { Account } from "./pages/Account";
import { Register } from "./pages/Register";
import { Cart } from "./pages/Cart";
import {Favorite } from "./pages/Favorite";
import { Profile } from "./pages/Profile";
import { Protected } from "./pages/ProtectedProfile";
import { ProtectedAccount } from "./pages/ProtectedProfile copy";

function App() {


  return (
    <>
    <Routes>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/profile" element={
      <Protected>
        <Profile/>
      </Protected>}/>
      <Route path="/login" element={
      <ProtectedAccount>
        <Account/>
      </ProtectedAccount>}/>
      <Route path="/register" element={<Register/>}/>
      
      <Route path="/favorite" element={
      <Protected>
        <Favorite />
      </Protected>
        }/>
      <Route path="/" element={<All/>}/>  
    </Routes>
    </>
  )
}

export default App
