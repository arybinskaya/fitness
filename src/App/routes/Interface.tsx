import { ComponentType } from "react";

export interface RouteConfig {
  label: string;
  path: string;
  key: RouteName;
  component: ComponentType;
  authenticated: boolean;
}

export enum RouteName {
  Login = "Login",
  Home = "Home",
}

export type Containers = RouteName.Login | RouteName.Home;
