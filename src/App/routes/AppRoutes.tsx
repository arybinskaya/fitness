import { BrowserRouter as Router } from "react-router-dom";

import { useSession } from "../session/Session";
import { UnauthenticatedRoutes } from "./UnauthenticatedRoutes";
import { AuthenticatedRoutes } from "./AuthenticatedRoutes";
import { Box, CircularProgress } from "@mui/material";

export const AppRoutes = (): JSX.Element => {
  const { authenticated, initializing } = useSession();

  if (initializing) {
    return (
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress size="lg" />
      </Box>
    );
  }

  const RouteComponent = authenticated
    ? AuthenticatedRoutes
    : UnauthenticatedRoutes;

  return (
    <Router>
      <RouteComponent />
    </Router>
  );
};
