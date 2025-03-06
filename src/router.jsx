import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import { Inicio } from './pages/inicio'
import { Search } from './pages/search'
import { Product } from './pages/product'
import { Register } from './pages/register'
import { Login } from "./pages/login"
import { Cart } from './pages/cart'
import { Profile } from './pages/profile'
export const AppRouter =()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/user/register" element={<Register/>}/>
                <Route path="/user/login" element={<Login/>}/>
                <Route path="/user/profile" element={<Profile/>}/>

                <Route path="/cart" element={<Cart/>}/>


                <Route path="/*" element={<Navigate to="/"/>}/>
            </Routes>
        </BrowserRouter>
    )
}