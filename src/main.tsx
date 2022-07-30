import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { AllPosts } from './pages/Posts'
import { AllProjects } from './pages/Projects'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/projects' element={<AllProjects />}></Route>
              <Route path='/posts' element={<AllPosts />}></Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
)