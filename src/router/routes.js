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
} from "../pages/";

const routes = [
  {
    path: "/login",
    component: LoginPage,
    exact: true,
    public: true,
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
];

export default routes;