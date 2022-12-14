import { iCounterContextProps } from "./@types/types";
import { UserProvider } from "./userContext";

export const Providers = ({ children }: iCounterContextProps) => {
  return <UserProvider>{children}</UserProvider>;
};
