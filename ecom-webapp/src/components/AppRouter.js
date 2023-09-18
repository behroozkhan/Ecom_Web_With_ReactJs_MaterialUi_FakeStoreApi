import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.js'
const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>

                <Routes>
            <Route path='/' element={<Home/>}  />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter