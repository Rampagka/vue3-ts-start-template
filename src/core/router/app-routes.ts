import type { RouteRecordRaw } from "vue-router";

const BaseRouter: RouteRecordRaw = {
    name: "Base",
    path: "/",
    redirect: { name: "Welcome" },
};

const WelcomeRoute: RouteRecordRaw = {
    name: "Welcome",
    path: "/welcome",
    component: () => import("@/pages/WelcomePage.vue"),
};

const AboutRoute: RouteRecordRaw = {
    name: "About",
    path: "/about/:name",
    component: () => import("@/pages/AboutPage.vue"),
};

export const AppRoutes: RouteRecordRaw[] = [
    BaseRouter,
    WelcomeRoute,
    AboutRoute,
];
