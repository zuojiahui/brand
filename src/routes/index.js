import asyncComponent from "../components/AsynComponent";
import { AppstoreOutlined, UndoOutlined, Camera } from "../utils/icons";
const Login = asyncComponent(() => import("../layouts/UserLayout"));
const BasicLayout = asyncComponent(() => import("../layouts/BasicLayout"));
const Notfined = asyncComponent(() => import("../page/404"));
export const routers = [
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/",
    component: <BasicLayout />,
    routes: [
      {
        path: "/apps",
        name: "All Apps",
        icon: <AppstoreOutlined />,
        component: "All Apps",
        routes: [
          {
            path: "/apps/a",
            name: "All Apps",
            icon: <AppstoreOutlined />,
            component: "aaa",
          },
        ],
      },
      {
        path: "/updates",
        name: "Updates",
        icon: <UndoOutlined />,
        component: "Updates",
      },
      {
        path: "/photography",
        name: "Photography",
        icon: <Camera />,
        component: "Photography",
      },
    ],
  },
  {
    path: "*",
    component: <Notfined />,
  },
];
