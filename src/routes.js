import { Home } from './pages/Home'
import { LoginSignup } from './pages/LoginSignup'
import { Feed } from "./cmps/Feed";
import { Course } from "./cmps/Course";
import { Question } from "./cmps/Question";
import { Profile } from "./cmps/Profile";

export const routes = [
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/',
        component: LoginSignup
    }
]


export const sidebarRoutes = [
    {
        path: '/',
        component: Feed,
    },
    {
        path: '/:id',
        component: Profile
    },
    {
        path: '/course',
        component: Course
    },
    {
        path: '/question',
        component: Question
    }
]
