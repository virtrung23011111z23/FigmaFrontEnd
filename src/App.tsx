
import './App.css'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import '../public/main.css'
import  Home  from './pages/Home'
import  About  from './pages/About'
import Product from './pages/Product'
import { Header } from './compoment/Header'
import { Footer } from './compoment/Footer'
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
         <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Product />} />
         </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
