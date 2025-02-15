import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import { Inicio } from './pages/inicio'

export const AppRouter =()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/*" element={<Navigate to="/"/>}/>
            </Routes>
        </BrowserRouter>
    )
}