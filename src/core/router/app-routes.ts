import type { RouteRecordRaw } from 'vue-router'

const BaseRouter: RouteRecordRaw = {
    name: 'Base',
    path: '/',
    redirect: { name: 'Welcome' },
}

const WelcomeRoute: RouteRecordRaw = {
    name: 'Welcome',
    path: '/welcome',
    component: () => import('@/pages/WelcomePage.vue'),
}

export const AppRoutes: RouteRecordRaw[] = [BaseRouter, WelcomeRoute]
