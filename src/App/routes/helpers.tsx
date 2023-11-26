import { generatePath, useNavigate, Params } from "react-router-dom";
import Authorization from "../../pages/authorization/Authorization";
import { RouteConfig, RouteName, Containers } from "./Interface";
import Advice from "../../pages/advice/Advice";

export const containerPaths: { [key in Containers]: string } = {
  [RouteName.Login]: "/login",
  [RouteName.Home]: "/home",
};

const routes: Record<RouteName, RouteConfig> = {
  [RouteName.Login]: {
    label: "Login",
    key: RouteName.Login,
    path: "/login",
    component: Authorization,
    authenticated: false,
  },
  [RouteName.Home]: {
    label: "Home",
    key: RouteName.Home,
    path: "/home",
    component: Advice,
    authenticated: true,
  },
};

export const authenticatedRoutes: RouteConfig[] = [];
export const unauthenticatedRoutes: RouteConfig[] = [];
Object.values(routes).forEach((route) => {
  const dest = route.authenticated
    ? authenticatedRoutes
    : unauthenticatedRoutes;
  dest.push(route);
});

export function useGotoRoute(
  name: RouteName
): (params?: Params<string>) => void {
  const navigate = useNavigate();
  const route = routes[name];
  return function gotoRoute(params) {
    const path = generatePath(route.path, params);
    navigate(path);
  };
}

export function generateRoutePath({
  name,
  params,
}: {
  name: RouteName;
  params?: Params<string>;
}): string {
  const route = routes[name];
  return generatePath(route.path, params);
}
