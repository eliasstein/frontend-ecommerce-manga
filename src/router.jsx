import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import { Inicio } from './pages/inicio'
import { Search } from './pages/search'

export const AppRouter =()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/*" element={<Navigate to="/"/>}/>
            </Routes>
        </BrowserRouter>
    )
}