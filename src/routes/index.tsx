import { Routes, Route, useLocation } from 'react-router-dom'
import { Home } from '../pages/Home'
import { SignIn } from '../pages/Sign-in'
import { SignUp } from '../pages/Sign-up'
import { NotFound } from '../pages/NotFound'
import { Books } from '../pages/Books'

export const AppRoutes: React.FC = () => {

   return(
    <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/sign_up' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/books' element={<Books />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
    )
}

