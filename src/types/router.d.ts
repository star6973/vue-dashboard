import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    /** * 페이지에 적용할 레이아웃 모드
     * - auth: 로그인/회원가입 등 (GNB/LNB 없음)
     * - admin: 관리자용 (모든 기능 포함)
     * - user: 작업자용 (단순화된 메뉴)
     * - error: 404/500 에러 페이지
     */
    layout?: 'auth' | 'admin' | 'user' | 'error';
    requiresAuth?: boolean;
    roles?: string[]; // 추후 권한 관리를 위해 미리 선언
    title?: string;
  }
}