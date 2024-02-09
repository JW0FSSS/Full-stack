

import { Route, Routes } from "react-router";
import { All } from "./pages/All";
import { Account } from "./components/Account";

function App() {


  return (
    <>
    <Routes>
      <Route path="/profile" element={<Account/>}/>
      <Route path="/" element={<All/>}/>  
    </Routes>
    </>
  )
}

export default App
