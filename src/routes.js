import { Home } from './pages/Home'
import { LoginSignup } from './pages/LoginSignup'
import { Feed } from "./cmps/Feed";
import { Rightbar } from "./cmps/Rightbar";
import { Article } from './cmps/article/Article'
import { Course } from "./cmps/Course";
import { Blog } from "./cmps/Blog";
import { Profile } from "./cmps/Profile";
import { ProfileSide } from "./cmps/ProfileSide";
import { AddArticle } from './cmps/article/AddArticle';
import { ProfileArticle } from './cmps/ProfileArticle';

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
        path: "/home/feed",
        exact: true,
        main: () => <Feed />,
        right: () => <Rightbar />
    },
    {
        path: "/home/course",
        main: () => <Course />,
        right: () => <span className="w-20"></span>

    },
    {
        path: "/home/blog/add",
        main: () => <AddArticle />,
        right: () => <span className="w-20"></span>
    },
    {
        path: "/home/blog/:id",
        main: () => <Article />,
        right: () => <span className="w-20"></span>
    }, {
        path: "/home/:id/article",
        main: () => <ProfileArticle />,
        right: () => <span className="w-20"></span>
    },
    {
        path: "/home/blog",
        main: () => <Blog />,
        right: () => <Rightbar />
    },
    {
        path: "/home/:id",
        main: () => <Profile />,
        right: () => <ProfileSide />

    }
];