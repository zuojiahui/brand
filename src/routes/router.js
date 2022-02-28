import { useRoutes } from "react-router-dom";
import { routers } from "./index";
export default function Index() {
  const formatData = (target) => {
    const routerList = target.map((item) => {
      if (item?.routes) item.children = item.routes;
      if (item?.component) {
        if (item?.children) {
          item.element = <> {item.component}</>;
        } else {
          item.element = item.component;
        }
      }
      delete item.routes;
      delete item.component;
      if (item?.children) formatData(item?.children);
      return { ...item };
    });
    return routerList;
  };
  const element = useRoutes(formatData(routers));
  return element;
}
