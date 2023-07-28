import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import LangSelectionPage from '../Pages/LangSelectionPage'
import PageNotFound from '../Pages/PageNotFound'
import ScreenPage from '../Pages/ScreenPage'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/language' element={<LangSelectionPage />}/>
            <Route path='*' element={<PageNotFound />}/>
            <Route path="/screen" element={<ScreenPage />} />
        </Routes>
    </div>
  )
}

export default AllRoutes