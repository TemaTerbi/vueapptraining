import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import PostPage from "@/pages/PostPage";
import Cat from "@/components/Cat";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/post',
        component: PostPage
    },
    {
        path: '/cat',
        component: Cat
    }
]


const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;