import { Router, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { SignIn } from '../pages/Sign-in'
import { SignUp } from '../pages/Sign-up'

export const AppRoutes = () => {
   return(
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign_in' element={<SignIn />} />
        <Route path='/sign_up' element={<SignUp />} />
    </Routes>
    )
}

