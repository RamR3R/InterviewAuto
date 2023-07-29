import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import LangSelectionPage from '../Pages/LangSelectionPage'
import PageNotFound from '../Pages/PageNotFound'
import ScreenPage from '../Pages/ScreenPage'
<<<<<<< HEAD
=======
import Dashboard from '../Pages/Dashboard'
import Studymaterial from '../Pages/Studymaterial'
>>>>>>> 4d32786adf115ff1a1e6e346b793daf8dda5c017

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/language' element={<LangSelectionPage />}/>
            <Route path='*' element={<PageNotFound />}/>
            <Route path="/screen" element={<ScreenPage />} />
<<<<<<< HEAD
=======
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/study-material' element={<Studymaterial/>}/>
>>>>>>> 4d32786adf115ff1a1e6e346b793daf8dda5c017
        </Routes>
    </div>
  )
}

export default AllRoutes