import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import AllProduct from './Pages/AllProduct'
import ProductDetail from './Pages/ProductDetail'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Dashboard from './Pages/Dashboard'
import { useTheme } from './context/ThemeContext'

function App() {
  const { theme } = useTheme()
  document.body.className = theme;
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allProduct" element={<AllProduct />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App