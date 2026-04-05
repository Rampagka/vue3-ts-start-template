import { AppRoutes } from "@/core/router/app-routes.ts";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: AppRoutes,
    scrollBehavior() {
        return { top: 0 };
    },
});

export default router;
