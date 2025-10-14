import { HomeLayout } from '@/shared/ui/layouts'
import { DefaultLayout } from '@/shared/ui/layouts'

export const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/pages/home'),
        meta: {
            layout: HomeLayout
        }
    },
    {
        path: '/category',
        component: () => import('@/pages/category'),
        meta: {
            layout: DefaultLayout
        }
    },
    {
        path: '/check',
        component: () => import('@/pages/check'),
        meta: {
            layout: DefaultLayout
        }
    },
]