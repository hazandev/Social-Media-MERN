import { Home } from './pages/Home'
import { LoginSignup } from './pages/LoginSignup'
import { Feed } from "./cmps/Feed";
import { Rightbar } from "./cmps/Rightbar";
import { Article } from './cmps/article/Article'
import { Course } from "./cmps/Course";
import { Blog } from "./cmps/Blog";
import { Profile } from "./cmps/profile/Profile";
import { ProfileSide } from "./cmps/profile/ProfileSide";
import { AddArticle } from './cmps/article/AddArticle';
import { ProfileArticle } from './cmps/profile/ProfileArticle';
import { CourseDetails } from './cmps/course/CourseDetails';
import { CourseSide } from './cmps/course/CourseSide';
export const routes = [{
        path: '/home',
        component: Home,
    },
    {
        path: '/',
        component: LoginSignup
    }
]


export const sidebarRoutes = [{
        path: "/home/feed",
        exact: true,
        main: () => < Feed / > ,
        right: () => < Rightbar / >
    },
    {
        path: "/home/blog/add",
        main: () => < AddArticle / > ,
        right: () => < span className = "w-20" > < /span>
    },
    {
        path: "/home/blog/:id",
        main: () => < Article / > ,
        right: () => < span className = "w-auto" > < /span>
    }, {
        path: "/home/course/:id",
        main: () => < CourseDetails / > ,
        right: () => < CourseSide / >
    },
    {
        path: "/home/course",
        main: () => < Course / > ,
        right: () => < span className = "w-auto" > < /span>

    },
    {
        path: "/home/blog",
        main: () => < Blog / > ,
        right: () => < Rightbar / >
    },
    {
        path: "/home/:id/article",
        main: () => < ProfileArticle / > ,
        right: () => < span className = "w-20" > < /span>
    },
    {
        path: "/home/:id",
        main: () => < Profile / > ,
        right: () => < ProfileSide / >
    }
];