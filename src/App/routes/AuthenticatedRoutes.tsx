import { Routes, Route, Navigate } from "react-router-dom";
import { authenticatedRoutes, generateRoutePath } from "./helpers";
import { RouteConfig, RouteName } from "./Interface";
import { Layout } from "../../layout";

export function AuthenticatedRoutes(): JSX.Element {
  return (
    <Routes>
      <Route element={<Layout />}>
        {authenticatedRoutes.map(
          ({ label, component: Element, path }: RouteConfig) => (
            <Route key={label} element={<Element />} path={path} />
          )
        )}
        <Route
          key={-1}
          path="*"
          element={
            <Navigate
              to={{
                pathname: generateRoutePath({ name: RouteName.Home }),
              }}
            />
          }
        />
      </Route>
    </Routes>
  );
}
