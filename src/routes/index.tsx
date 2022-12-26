import { Routes, Route, useLocation } from 'react-router-dom'
import { Home } from '../pages/Home'
import { SignIn } from '../pages/Sign-in'
import { SignUp } from '../pages/Sign-up'
import { Header } from '../components/Header'
import { render } from 'react-dom'

export const AppRoutes: React.FC = () => {

   return(
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign_in' element={<SignIn />} />
        <Route path='/sign_up' element={<SignUp />} />
    </Routes>
    )
}

