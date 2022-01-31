import {
  DashboardPage,
  LoginPage,
  ChatViewPage,
  ChatsListPage,
  ReviewsListPage,
  DoctorsListPage,
  DoctorViewPage,
  DoctorsRequestsPage,
  UsersListPage,
  UserViewPage,
  GlobalSettingsPage,
  StatsPage,
  PromocodesPage,
  LogsListPage,
  SupportListPage,
  SupportViewPage,
} from "../pages/";

const routes = [
  {
    path: "/login",
    component: LoginPage,
    exact: true,
    private: false,
  },
  {
    path: "/",
    component: DashboardPage,
    exact: true,
    private: true,
  },
  {
    path: "/chats",
    component: ChatsListPage,
    exact: true,
    private: true,
  },
  {
    path: "/chat/:chat_id",
    component: ChatViewPage,
    exact: true,
    private: true,
  },
  {
    path: "/reviews",
    component: ReviewsListPage,
    exact: true,
    private: true,
  },
  {
    path: "/doctors",
    component: DoctorsListPage,
    exact: true,
    private: true,
  },
  {
    path: "/doctor/:doc_id",
    component: DoctorViewPage,
    exact: true,
    private: true,
  },
  {
    path: "/requests",
    component: DoctorsRequestsPage,
    exact: true,
    private: true,
  },
  {
    path: "/users",
    component: UsersListPage,
    exact: true,
    private: true,
  },
  {
    path: "/user/:user_id",
    component: UserViewPage,
    exact: true,
    private: true,
  },
  {
    path: "/global-settings",
    component: GlobalSettingsPage,
    exact: true,
    private: true,
  },
  {
    path: "/statistics",
    component: StatsPage,
    exact: true,
    private: true,
  },
  {
    path: "/promo-codes",
    component: PromocodesPage,
    exact: true,
    private: true,
  },
  {
    path: "/logs",
    component: LogsListPage,
    exact: true,
    private: true,
  },
  {
    path: "/support",
    component: SupportListPage,
    exact: true,
    private: true,
  },
  {
    path: "/support/:chat_id",
    component: SupportViewPage,
    exact: true,
    private: true,
  },
];

export default routes;
