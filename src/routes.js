import { Profile } from './pages/Profile'
import { Home } from './pages/Home'
import { LoginSignup } from './pages/LoginSignup'

export const routes = [
    {
        path: '/:id',
        component: Profile,
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/',
        component: LoginSignup,
    },
]
