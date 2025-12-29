import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const LoginView = () => import("@/views/LoginView.vue");
const AdminDashboard = () => import("@/views/DashboardView.vue"); // 임시
const UserWorkplace = () => import("@/views/DashboardView.vue"); // 임시
const NotFound = () => import("@/views/NotFound.vue");

const routes: Array<RouteRecordRaw> = [
  // 1. 인증 (Login)
  {
    path: "/login",
    name: "Login",
    component: LoginView,
    meta: { layout: "auth", title: "로그인" },
  },
  // 2. 관리자 (Admin)
  {
    path: "/admin",
    name: "AdminDashboard",
    component: AdminDashboard,
    meta: { layout: "admin", requiresAuth: true, title: "관리자 대시보드" },
  },
  // 3. 사용자 (User / Operator)
  {
    path: "/",
    name: "UserWorkplace",
    component: UserWorkplace,
    meta: { layout: "user", requiresAuth: true, title: "작업 현장" },
  },
  // 4. 에러 (404)
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
    meta: { layout: "error", title: "페이지 없음" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
