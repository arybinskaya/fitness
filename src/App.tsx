import QueryClientProvider from "./App/service/QueryClientProvider";
import { SessionProvider } from "./App/session";
import { AppRoutes } from "./App/routes/AppRoutes";

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
