import { HomeLayout } from '@/shared/ui/layouts'
import { DefaultLayout } from '@/shared/ui/layouts'

export const routes = [
    {
        path: '/',
        name: 'Home page',
        component: () => import('@/pages/home'),
        meta: {
            layout: HomeLayout
        }
    },
    {
        path: '/category/:categoryName',
        name: 'Category page',
        component: () => import('@/pages/category'),
        meta: {
            layout: DefaultLayout
        }
    },
]