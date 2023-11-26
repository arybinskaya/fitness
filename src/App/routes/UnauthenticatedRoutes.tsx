import { Routes, Route, Navigate } from "react-router-dom";

import { unauthenticatedRoutes, generateRoutePath } from "./helpers";
import { RouteConfig, RouteName } from "./Interface";
import { Layout } from "../../layout";

export function UnauthenticatedRoutes(): JSX.Element {
  return (
    <Routes>
      <Route element={<Layout />}>
        {unauthenticatedRoutes.map(
          ({ label, component: Element, path }: RouteConfig) => {
            return <Route key={label} element={<Element />} path={path} />;
          }
        )}
        <Route
          key={-1}
          path="*"
          element={
            <Navigate
              to={{
                pathname: generateRoutePath({ name: RouteName.Login }),
              }}
            />
          }
        />
      </Route>
    </Routes>
  );
}
