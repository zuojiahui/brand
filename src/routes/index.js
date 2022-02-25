import BasicLayout from "../layouts/BasicLayout";
import Notfined from "../page/404";
import { AppstoreOutlined, UndoOutlined, Camera } from "../utils/icons";
// const data = [
//   { name: "All Apps", icon: <AppstoreOutlined /> },
//   { name: "Updates", icon: <UndoOutlined /> },
//   { name: "Photography", icon: <Camera /> },
//   { name: "Video", icon: <Video /> },
//   { name: "Graphic Design", icon: <Hand /> },
//   { name: "Illustrations", icon: <Pen /> },
//   { name: "UI/UX", icon: <Computer /> },
//   { name: "3D/AR", icon: <ThreeD /> },
//   { name: "Social Forum", icon: <Chat /> },
// ];
export const routers = [
  {
    path: "/login",
    component: <div>登陆页面</div>,
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
