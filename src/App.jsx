import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { AllPosts } from './pages/Posts'
import { AllProjects } from './pages/Projects'

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/projects' element={<AllProjects />}></Route>
                <Route path='/posts' element={<AllPosts />}></Route>
            </Routes>
        </BrowserRouter>
    )
}