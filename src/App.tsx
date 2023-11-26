import { AppRoutes } from "./App/routes/AppRoutes";
import { SessionProvider } from "./App/session";
import QueryClientProvider from "./App/service/QueryClientProvider";

const App = () => {
  return (
    <QueryClientProvider>
      <SessionProvider>
        <AppRoutes />
      </SessionProvider>
    </QueryClientProvider>
  );
};

export default App;
