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
        path: '/check',
        name: 'Check page',
        component: () => import('@/pages/check'),
        meta: {
            layout: DefaultLayout
        }
    },
]