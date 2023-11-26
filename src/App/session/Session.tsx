import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useCallback,
  useEffect,
} from "react";
import { TUser } from "../../data";
import * as storage from "./PersistanceSession";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../shared";
import UserService from "../service/service";

const defaultAccessToken = storage.get(ACCESS_TOKEN) || null;

export type SinginResponse = {
  refresh_token: string;
  access_token: string;
};

export type TSessionContextValues = {
  initializing: boolean;
  authenticated: boolean;
  unauthenticated: boolean;
  signOut: () => void;
  setInitializing: () => void;
  user: TUser | null;
  setTokens: (data: SinginResponse) => void;
};

const SessionContext = createContext<TSessionContextValues>({
  initializing: true,
  authenticated: false,
  unauthenticated: false,
  signOut: () => null,
  setInitializing: () => null,
  user: null,
  setTokens: () => null,
});

type SessionProviderProps = {
  children: ReactNode;
};

const { Provider } = SessionContext;

enum SessionStatus {
  Initializing = "Initializing",
  Authenticated = "Authenticated",
  Unauthenticated = "Unauthenticated",
}

const SessionProvider = ({ children }: SessionProviderProps): JSX.Element => {
  const [status, setStatus] = useState<SessionStatus>(
    SessionStatus.Initializing
  );
  const [accessToken, setAccessToken] = useState(defaultAccessToken);
  const [user, setUser] = useState<TUser | null>(null);

  const setTokens = useCallback(
    ({ access_token, refresh_token }: SinginResponse) => {
      storage.set({
        [ACCESS_TOKEN]: access_token,
        [REFRESH_TOKEN]: refresh_token,
      });
      setAccessToken(access_token);
    },
    []
  );
  const authenticate = useCallback((userData: TUser) => {
    setUser(userData);
    setStatus(SessionStatus.Authenticated);
  }, []);

  const signOut = useCallback(() => {
    storage.clear();
    setAccessToken(null);
    setUser(null);
    setStatus(SessionStatus.Unauthenticated);
  }, []);

  const setInitializing = (): void => {
    setStatus(SessionStatus.Initializing);
  };

  const inStatus = (s: SessionStatus): boolean => {
    return status === s;
  };

  const getUserData = useCallback(async () => {
    try {
      const res = await UserService.getUser();
      authenticate(res);
    } catch (error) {
      signOut();
    }
  }, [authenticate, signOut]);

  useEffect(() => {
    if (accessToken) {
      setInitializing();
      getUserData();
    } else {
      signOut();
    }
  }, [accessToken, getUserData, signOut]);

  const value: TSessionContextValues = {
    initializing: inStatus(SessionStatus.Initializing),
    authenticated: inStatus(SessionStatus.Authenticated),
    unauthenticated: inStatus(SessionStatus.Unauthenticated),
    setTokens,
    signOut,
    setInitializing,
    user,
  };

  return <Provider value={value}>{children}</Provider>;
};

const useSession = (): TSessionContextValues => {
  return useContext(SessionContext);
};

export { SessionProvider, SessionContext, useSession };
