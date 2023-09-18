import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.js'
const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>

                <Route>
            <Routes path='/' element={<Home/>}  />
                </Route>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter