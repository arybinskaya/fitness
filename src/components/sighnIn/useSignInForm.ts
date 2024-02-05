import UserService from "../../App/service/service";
import { useSession } from "../../App/session";
import { useApiMutation } from "./hooks/useApiMutation";

const queryKey = "signin";

type SinginResponse = {
  refresh_token: string;
  access_token: string;
};

type SinginRequest = {
  name: string;
  password: string;
};

export const useSignInForm = (): {
  handleSubmit: ({ name, password }: SinginRequest) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  data?: SinginResponse;
} => {
  const { setTokens } = useSession();
  const {
    isSuccess,
    mutate: authenticate,
    data,
    error,
    isError,
    isLoading,
  } = useApiMutation([queryKey], UserService.signIn, {
    onSuccess: (data) => {
      console.log(data);
      setTokens(data);
    },
  });

  const handleSubmit = (values: SinginRequest) => authenticate(values);

  return {
    handleSubmit,
    error,
    isError,
    isLoading,
    isSuccess,
    data,
  };
};
