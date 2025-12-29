import AuthLayout from "./AuthLayout.vue";
import AdminLayout from "./AdminLayout.vue";
import UserLayout from "./UserLayout.vue";
import ErrorLayout from "./ErrorLayout.vue";

export const layouts = {
  auth: AuthLayout,
  admin: AdminLayout,
  user: UserLayout,
  error: ErrorLayout,
};

export type LayoutKey = keyof typeof layouts;
