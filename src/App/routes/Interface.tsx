import { ComponentType } from "react";

export interface RouteConfig {
  label: string;
  path: string;
  key: RouteName;
  component: ComponentType;
  authenticated: boolean;
  showInMenu?: boolean;
}

export enum RouteName {
  Login = "Login",
  Home = "Home",
  Advice = "Advice",
  Exercise = "Exercise",
  Psycholody = "Psycholody",
  Workout = "Workout",
}

export type Containers =
  | RouteName.Login
  | RouteName.Home
  | RouteName.Advice
  | RouteName.Exercise
  | RouteName.Psycholody
  | RouteName.Workout
  | RouteName.Workout;
