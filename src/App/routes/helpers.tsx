import { generatePath, useNavigate, Params } from "react-router-dom";
import Authorization from "../../pages/authorization/Authorization";
import { RouteConfig, RouteName, Containers } from "./Interface";
import Main from "../../pages/main/Main";
import Advice from "../../pages/advice/Advice";
import ExercisesForSwelling from "../../pages/exercisesForSwelling/ExercisesForSwelling";
import Psychology from "../../pages/psychology/Psychology";
import Workout from "../../pages/workout/Workout";

export const containerPaths: { [key in Containers]: string } = {
  [RouteName.Login]: "/login",
  [RouteName.Home]: "/home",
  [RouteName.Advice]: "/advice",
  [RouteName.Exercise]: "/exercise",
  [RouteName.Psycholody]: "/psycholody",
  [RouteName.Workout]: "/workout",
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
    component: Main,
    authenticated: true,
  },
  [RouteName.Advice]: {
    label: "Advice",
    path: "/advice",
    key: RouteName.Advice,
    component: Advice,
    authenticated: true,
    showInMenu: true,
  },
  [RouteName.Exercise]: {
    label: "Exercise",
    path: "/exercise",
    key: RouteName.Exercise,
    component: ExercisesForSwelling,
    authenticated: true,
    showInMenu: true,
  },
  [RouteName.Psycholody]: {
    label: "Psycholody",
    path: "/psycholody",
    key: RouteName.Psycholody,
    component: Psychology,
    authenticated: true,
    showInMenu: true,
  },
  [RouteName.Workout]: {
    label: "Workout",
    path: "/workout",
    key: RouteName.Workout,
    component: Workout,
    authenticated: true,
    showInMenu: true,
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
