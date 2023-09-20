import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.js'
import Checkout from '../pages/Checkout.js'


const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>

                <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path='/checkout' element={<Checkout/>}  />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter